import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useLocation, useHistory } from "react-router";
import { colorSchema } from "../../common/constants/colorSchema";
import Navigator from "../../components/navigator/Navigator";
import { Ionicons } from "@expo/vector-icons";
import { userDeviceWidth } from "../../common/helpers/screenHelper";
import { useAppSelector } from "../../reduxToolKit-Saga/hooks";
import { RootState } from "../../reduxToolKit-Saga/store";
import { iLaptopData } from "../../services/apiTypes";
import { AntDesign } from "@expo/vector-icons";

export default function Cart() {
  const location = useLocation().pathname;
  const history = useHistory();
  const data = useAppSelector<iLaptopData[]>(
    (state: RootState) => state.laptop.datas
  );

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => history.goBack()}>
            <Ionicons
              name="chevron-back"
              size={30}
              color={colorSchema.DARK_PRIMARY}
            />
          </TouchableWithoutFeedback>

          <Text style={styles.header_text}> Giỏ hàng</Text>
        </View>
        <View style={styles.product_container}>
          <View style={styles.product_in_cart}>
            <Image
              resizeMode="contain"
              style={styles.product_img}
              source={{ uri: data[0].imgs[0] }}
            />
            <View
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                marginLeft: 10,
                paddingVertical: 20,
                paddingHorizontal: 8,
              }}
            >
              <Text style={{ fontSize: 18 }}>{data[0].name}</Text>
              <Text
                style={{
                  fontSize: 17,
                  color: colorSchema.PRIMARY,
                  marginTop: 10,
                }}
              >
                {data[0].price}
              </Text>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
              >
                <AntDesign
                  name="pluscircle"
                  size={20}
                  color={colorSchema.PRIMARY}
                />
                <Text style={{ fontSize: 16, marginHorizontal: 25 }}>2</Text>
                <AntDesign
                  name="minuscircle"
                  size={20}
                  color={colorSchema.PRIMARY}
                />
              </View>
            </View>
          </View>
          <TouchableWithoutFeedback>
            <Text style={styles.btn}>Thanh Toán</Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
      <Navigator location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header_text: {
    fontWeight: "bold",
    fontSize: userDeviceWidth / 15,
    color: colorSchema.DARK_PRIMARY,
    textAlign: "center",
    marginLeft: "30%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 10,
  },
  product_container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 40,
    marginTop: 35,
  },
  product_in_cart: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    borderColor: colorSchema.BORDER_LIGHT,
    borderWidth: 2,
  },
  product_img: {
    width: "35%",
    height: 150,
  },
  btn: {
    textAlign: "center",
    backgroundColor: colorSchema.PRIMARY,
    paddingVertical: 10,
    color: colorSchema.WHITE,
    fontSize: 18,
    borderRadius: 10,
    marginVertical: 30,
  },
});
