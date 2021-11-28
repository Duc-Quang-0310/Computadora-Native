import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useHistory } from "react-router-native";
import { route } from "../../../common/configs/routes/routeName";
import { colorSchema } from "../../../common/constants/colorSchema";

export default function ReceiptSuccess() {
  const history = useHistory();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 25,
          textTransform: "uppercase",
          fontWeight: "bold",
          letterSpacing: 1,
          color: colorSchema.PAY_HEADER,
        }}
      >
        Thanh toán thành công
      </Text>
      <Image
        resizeMode="contain"
        style={{ width: "70%", height: 350 }}
        source={require("../../../assets/imgs/wallet.png")}
      />
      <Text style={{ fontSize: 16, color: colorSchema.PAY_TEXT }}>
        Đơn hàng của bạn đã được xác nhận. {"\n"} Cảm ơn đã tin dùng
        Computadora!!!
      </Text>
      <TouchableWithoutFeedback onPress={() => history.push(route.HOME)}>
        <Text
          style={{
            fontSize: 20,
            color: colorSchema.WHITE,
            backgroundColor: colorSchema.PRIMARY,
            paddingVertical: 12,
            paddingHorizontal: 110,
            borderRadius: 10,
            marginTop: 50,
          }}
        >
          Về trang chủ
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
