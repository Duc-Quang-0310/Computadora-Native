import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useLocation, useHistory } from "react-router";
import Navigator from "../../components/navigator/Navigator";
import SearchBar from "../../components/searchBar/SearchBar";
import Carousel from "react-native-snap-carousel";
import { colorSchema } from "../../common/constants/colorSchema";
import { iBlogData, iBlogResponseType } from "../../services/apiTypes";
import { blogService } from "../../services/ortherService";
import {
  userDeviceWidth,
  userDeviceHeight,
} from "../../common/helpers/screenHelper";
import { route } from "../../common/configs/routes/routeName";

export default function Blog() {
  const history = useHistory();
  const location = useLocation().pathname;
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [blogData, setBlogData] = useState<iBlogData[]>([]);
  const carouselData = blogData.slice(25);
  const [dataLength, setDataLength] = useState<number>(10);
  const [blogDataSlice, setBlogDataSlice] = useState<iBlogData[]>();

  const handleSeeMore = useCallback(() => {
    setDataLength(dataLength + 10);
    setBlogDataSlice(blogData.slice(0, dataLength + 10));
  }, [dataLength, blogData]);

  const fetchBlogData = async () => {
    try {
      const response: iBlogResponseType = await blogService.getAll();
      if (response.success) {
        setBlogData(response.data);
      }
    } catch (error: any) {
      console.log(error.response.data.success);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      fetchBlogData();
    } else {
      setBlogDataSlice(blogData.slice(0, dataLength));
    }
  }, [loading]);

  const renderCarousel = ({ item }: any) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => history.push(route.DETAILS_ROUTE(item._id, "blog"))}
      >
        <View style={styles.carouselView}>
          <Image
            resizeMode="cover"
            source={{
              uri: item.imgHeadline[0],
            }}
            style={styles.carouselImage}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <SearchBar location={location} />

        {loading ? (
          <ActivityIndicator
            size="large"
            color={colorSchema.PRIMARY}
            style={{ marginTop: 30 }}
          />
        ) : (
          <>
            <View style={[styles.centerFlexContainer]}>
              <Text style={[styles.headerText, { paddingHorizontal: 20 }]}>
                Tin nổi bật
              </Text>
              <Carousel
                layout={"default"}
                data={carouselData}
                sliderWidth={userDeviceWidth}
                itemWidth={userDeviceWidth - 40}
                renderItem={renderCarousel}
                onSnapToItem={(index) => setIndex(index)}
              />
            </View>

            <View style={[styles.centerFlexContainer]}>
              <Text style={[styles.headerText, { paddingHorizontal: 20 }]}>
                Tất cả tin tức
              </Text>
              <View style={styles.blogWrapper}>
                <View>
                  {blogDataSlice?.length &&
                    blogDataSlice?.map((blog, index) => {
                      return (
                        <TouchableWithoutFeedback
                          onPress={() =>
                            history.push(route.DETAILS_ROUTE(blog._id, "blog"))
                          }
                          key={index}
                        >
                          <View style={styles.blog}>
                            <Image
                              resizeMode="cover"
                              style={styles.blog_Image}
                              source={{ uri: blog.imgHeadline[0] }}
                            />
                            <View style={styles.blog_text}>
                              <Text
                                style={{ fontWeight: "bold", fontSize: 15 }}
                              >
                                {blog.headline}
                              </Text>
                            </View>
                          </View>
                        </TouchableWithoutFeedback>
                      );
                    })}
                </View>
                {dataLength < blogData.length && (
                  <TouchableWithoutFeedback onPress={() => handleSeeMore()}>
                    <Text style={styles.btnSeemore}> Xem thêm</Text>
                  </TouchableWithoutFeedback>
                )}
              </View>
            </View>
          </>
        )}
      </ScrollView>

      <Navigator location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  carouselView: {
    borderRadius: 5,
    height: 200,
  },
  carouselImage: {
    height: 200,
    width: "100%",
    backgroundColor: colorSchema.DARK_PRIMARY,
  },
  centerFlexContainer: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 20,
  },
  headerText: {
    fontSize: 18,
    color: colorSchema.DARK_PRIMARY,
    fontWeight: "bold",
    marginBottom: 10,
  },
  blogWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  blog_Image: {
    height: userDeviceHeight / 3,
    borderWidth: 2,
  },
  blog: {
    marginVertical: 20,
    shadowRadius: 2,
    shadowColor: colorSchema.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  blog_text: {
    paddingVertical: 10,
    borderColor: colorSchema.BORDER_LIGHT,
    borderRadius: 2,
    borderBottomColor: colorSchema.BORDER_LIGHT,
    borderBottomWidth: 2,
  },
  btnSeemore: {
    textAlign: "center",
    fontSize: 18,
    color: colorSchema.WHITE,
    paddingVertical: 10,
    backgroundColor: colorSchema.PRIMARY,
  },
});
