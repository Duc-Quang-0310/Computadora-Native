import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import { useHistory } from "react-router-native";
import { route } from "../../../common/configs/routes/routeName";
import { colorSchema } from "../../../common/constants/colorSchema";

export default function CartAddSuccess() {
  const history = useHistory();
  return (
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../../assets/imgs/success_add.png")}
      />
      <Text style={styles.text}>Thêm vào giỏ hàng {"\n"} thành công</Text>
      <TouchableNativeFeedback onPress={() => history.push(route.HOME)}>
        <Text style={styles.button}>Về trang chủ</Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => history.push(route.LAPTOP)}>
        <Text style={styles.button}>Về sản phẩm</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "40%",
  },
  text: {
    paddingVertical: 13,
    fontSize: 20,
    color: colorSchema.PRIMARY,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  button: {
    width: 260,
    paddingVertical: 10,
    backgroundColor: colorSchema.PRIMARY,
    color: colorSchema.WHITE,
    textAlign: "center",
    fontSize: 16,
    marginVertical: 8,
  },
});
