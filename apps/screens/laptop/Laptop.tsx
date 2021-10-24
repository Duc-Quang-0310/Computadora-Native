import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useLocation, useHistory } from "react-router";
import { colorSchema } from "../../common/constants/colorSchema";
import Navigator from "../../components/navigator/Navigator";
import SearchBar from "../../components/searchBar/SearchBar";
import { useAppSelector } from "../../reduxToolKit-Saga/hooks";
import { RootState } from "../../reduxToolKit-Saga/store";
import { iLaptopData } from "../../services/apiTypes";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { userDeviceWidth } from "../../common/helpers/screenHelper";

export default function Laptop() {
  const location = useLocation().pathname;
  const history = useHistory();
  const laptopdata = useAppSelector<iLaptopData[]>(
    (state: RootState) => state.laptop.datas
  );
  const [dataLength, setDataLength] = useState<number>(10);
  const [laptopDataSlice, setLaptopDataSlice] = useState<iLaptopData[]>(
    laptopdata.slice(0, 10)
  );
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleButton = useCallback(() => {
    setDataLength(dataLength + 10);
    setLaptopDataSlice(laptopdata.slice(0, dataLength + 10));
  }, [dataLength, laptopDataSlice]);

  const renderCarouselLaptop = ({ item }: any) => {
    return (
      <TouchableWithoutFeedback>
        <View style={[styles.carouselView, {}]}>
          <Image
            resizeMode="cover"
            source={{
              uri: item.imgs[0],
            }}
            style={styles.carouselImage_laptop}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentWrapper}>
        <SearchBar location={location} />
        <View style={styles.centerFlexContainer}>
          <Text style={[styles.headerText]}>Sản phẩm bán chạy</Text>
          <Carousel
            layout={"stack"}
            data={laptopDataSlice}
            sliderWidth={userDeviceWidth}
            itemWidth={userDeviceWidth - 40}
            renderItem={renderCarouselLaptop}
            onSnapToItem={(index) => setIndex(index)}
          />
        </View>

        <View style={styles.centerFlexContainer}>
          <Text style={[styles.headerText]}>Sản phẩm hiện có</Text>
          <View style={[styles.productWrapper, { paddingHorizontal: 20 }]}>
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
          {dataLength < 90 && (
            <View style={{ paddingHorizontal: 20 }}>
              <TouchableWithoutFeedback onPress={() => handleButton()}>
                {loading ? (
                  <ActivityIndicator size="large" color={colorSchema.WHITE} />
                ) : (
                  <Text style={styles.btnSeemore}>Xem thêm</Text>
                )}
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>
      </ScrollView>
      <Navigator location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselView: {
    borderRadius: 5,
    height: 250,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colorSchema.WHITE,
    position: "relative",
    shadowRadius: 2,
    shadowColor: colorSchema.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  carouselImage_laptop: {
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    backgroundColor: colorSchema.LIGHT_GREY,
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
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  productWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
  products: {
    width: "47%",
    minHeight: 130,
    maxHeight: 230,
    backgroundColor: colorSchema.WHITE,
    marginBottom: 20,
    borderRadius: 10,
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
