import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { useLocation } from "react-router";
import Navigator from "../../components/navigator/Navigator";
import SearchBar from "../../components/searchBar/SearchBar";
import Carousel from "react-native-snap-carousel";
import { colorSchema } from "../../common/constants/colorSchema";
import { iBlogData, iBlogResponseType } from "../../services/apiTypes";
import { blogService } from "../../services/ortherService";
import { userDeviceWidth } from "../../common/helpers/screenHelper";

export default function Blog() {
  const location = useLocation().pathname;
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [blogData, setBlogData] = useState<iBlogData[]>([]);
  const carouselData = blogData.slice(25);
  const [blogDataSlice, setBlogDataSlice] = useState<iBlogData[]>();

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

  console.log(blogDataSlice);

  useEffect(() => {
    if (loading) {
      fetchBlogData();
    }
  }, [loading]);

  const renderCarousel = ({ item }: any) => {
    return (
      <View style={styles.carouselView}>
        <Image
          resizeMode="cover"
          source={{
            uri: item.imgHeadline[0],
          }}
          style={styles.carouselImage}
        />
      </View>
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
});
