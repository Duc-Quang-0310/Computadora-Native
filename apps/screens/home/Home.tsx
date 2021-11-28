import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import { useHistory, useLocation } from "react-router";
import { route } from "../../common/configs/routes/routeName";
import { colorSchema } from "../../common/constants/colorSchema";
import Navigator from "../../components/navigator/Navigator";
import SearchBar from "../../components/searchBar/SearchBar";
import Carousel from "react-native-snap-carousel";
import { useAppSelector } from "../../reduxToolKit-Saga/hooks";
import { RootState } from "../../reduxToolKit-Saga/store";
import Spinner from "react-native-loading-spinner-overlay";
import {
  iBlogData,
  iBlogResponseType,
  iLaptopData,
} from "../../services/apiTypes";
import { blogService } from "../../services/ortherService";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

export default function Home() {
  const history = useHistory();
  const location = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [blogData, setBlogData] = useState<iBlogData[]>([]);
  const laptopdata = useAppSelector<iLaptopData[]>(
    (state: RootState) => state.laptop.datas
  );
  const blogDataSlice = blogData.slice(25);
  const laptopDataSlice = laptopdata.slice(0, 10);

  const userDeviceWidth = Dimensions.get("window").width;

  const fetchBlogData = async () => {
    try {
      setIsLoading(true);
      const response: iBlogResponseType = await blogService.getAll();
      if (response.success) {
        setBlogData(response.data);
      }
    } catch (error: any) {
      console.log(error.response.data.success);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchBlogData();
    }
  }, [isLoading]);

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

  const renderCarouselLaptop = ({ item }: any) => {
    return (
      <View
        style={[
          styles.carouselView,
          {
            display: "flex",
            flexDirection: "row",
            backgroundColor: colorSchema.WHITE,
            position: "relative",
          },
        ]}
      >
        <View style={{ width: "50%" }}>
          <Image
            resizeMode="contain"
            source={{
              uri: item.imgs[0],
            }}
            style={styles.carouselImage_laptop}
          />
        </View>
        <View
          style={{
            width: "50%",
            paddingHorizontal: 8,
            paddingVertical: 10,
          }}
        >
          <Text>Chip: {item.chip}</Text>
          <Text>Card: {item.card}</Text>
          <Text>Ram: {item.ram}</Text>
        </View>
        <AntDesign
          name="pluscircle"
          size={22}
          color={colorSchema.PRIMARY}
          style={{ position: "absolute", bottom: 10, right: 10 }}
        />
        <Text
          style={{
            position: "absolute",
            bottom: 15,
            left: 25,
            color: colorSchema.TEXT_DANGER,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {item.price}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.contentWrapper}>
        <SearchBar location={location} />
        {isLoading ? (
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
                data={blogDataSlice}
                sliderWidth={userDeviceWidth}
                itemWidth={userDeviceWidth - 40}
                renderItem={renderCarousel}
                onSnapToItem={(index) => setIndex(index)}
              />
            </View>

            <View style={styles.mainFunc}>
              <Text style={styles.headerText}>Chức năng chính</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={styles.leftFunc}>
                  <Ionicons
                    name="laptop-outline"
                    size={60}
                    color={colorSchema.BLACK}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      color: colorSchema.BLACK,
                      marginTop: 5,
                    }}
                  >
                    Mua sắm laptop
                  </Text>
                </View>
                <View style={styles.rightFunc}>
                  <View style={[styles.rightFunc_container]}>
                    <Feather name="book-open" size={24} color="black" />
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        marginLeft: "auto",
                      }}
                    >
                      Đánh giá sản phẩm
                    </Text>
                  </View>
                  <View
                    style={[styles.rightFunc_container, { marginTop: "auto" }]}
                  >
                    <FontAwesome5 name="rocketchat" size={24} color="black" />
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        marginLeft: "auto",
                      }}
                    >
                      Chia sẻ của bạn
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.centerFlexContainer}>
              <Text style={[styles.headerText, { paddingHorizontal: 20 }]}>
                Sản phẩm bán chạy
              </Text>
              <Carousel
                layout={"default"}
                data={laptopDataSlice}
                sliderWidth={userDeviceWidth}
                itemWidth={userDeviceWidth - 40}
                renderItem={renderCarouselLaptop}
                onSnapToItem={(index) => setIndex(index)}
              />
            </View>

            <View
              style={[styles.centerFlexContainer, { paddingHorizontal: 20 }]}
            >
              <Text style={[styles.headerText]}>Sản phẩm của chúng tôi</Text>
              <View style={styles.productWrapper}>
                {laptopDataSlice.map((item, index) => {
                  return (
                    <View style={styles.products} key={index}>
                      <Image
                        resizeMode="contain"
                        style={styles.products_imgs}
                        source={{ uri: item.imgs[0] }}
                      />
                      <Text
                        style={{
                          textAlign: "center",
                          color: colorSchema.TEXT_DANGER,
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}
                      </Text>

                      <View style={styles.products_funcWrapper}>
                        <View style={[styles.products_func, styles.boderRight]}>
                          <AntDesign
                            name="pluscircle"
                            size={22}
                            color={colorSchema.PRIMARY}
                          />
                        </View>
                        <View style={styles.products_func}>
                          <Entypo
                            name="heart-outlined"
                            size={22}
                            color={colorSchema.PRIMARY}
                          />
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
              <TouchableWithoutFeedback
                onPress={() => history.push(route.LAPTOP)}
              >
                <Text style={styles.btnSeemore}> Xem thêm</Text>
              </TouchableWithoutFeedback>
            </View>
            <Button
              title="add to cart success"
              color={colorSchema.PRIMARY}
              onPress={() => history.push(route.CART_ADD_SUCCESS)}
            />
            <Button
              title="search"
              color={colorSchema.PRIMARY}
              onPress={() => history.push(route.SEARCH)}
            />
            <Button
              title="pay-success"
              color={colorSchema.PRIMARY}
              onPress={() => history.push(route.RECEIPT_SUCCESS)}
            />
          </>
        )}
      </ScrollView>
      <Navigator location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colorSchema.LIGHT_GREY,
  },
  carouselView: {
    borderRadius: 5,
    height: 200,
  },
  centerFlexContainer: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 20,
  },
  carouselImage: {
    height: 200,
    width: "100%",
  },
  carouselImage_laptop: {
    width: "100%",
    height: "100%",
  },
  mainFunc: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    color: colorSchema.DARK_PRIMARY,
    fontWeight: "bold",
    marginBottom: 10,
  },
  leftFunc: {
    width: "40%",
    height: 180,
    backgroundColor: colorSchema.WHITE,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
  },
  rightFunc: {
    width: "55%",
    borderRadius: 10,
    height: 180,
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
  },
  rightFunc_container: {
    height: 85,
    backgroundColor: colorSchema.WHITE,
    borderRadius: 10,
    shadowRadius: 2,
    shadowColor: colorSchema.BLACK,
    elevation: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  productWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  products: {
    width: "47%",
    minHeight: 130,
    maxHeight: 230,
    backgroundColor: colorSchema.WHITE,
    marginBottom: 20,
    borderRadius: 10,
  },
  products_imgs: {
    width: "100%",
    height: "70%",
    backgroundColor: "#fff",
  },
  products_funcWrapper: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 2,
    borderTopColor: colorSchema.BORDER_LIGHT,
    marginTop: 10,
    height: 40,
  },
  products_func: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boderRight: {
    borderRightColor: colorSchema.BORDER_LIGHT,
    borderRightWidth: 2,
  },
  btnSeemore: {
    textAlign: "center",
    fontSize: 18,
    color: colorSchema.WHITE,
    paddingVertical: 10,
    backgroundColor: colorSchema.PRIMARY,
  },
});
