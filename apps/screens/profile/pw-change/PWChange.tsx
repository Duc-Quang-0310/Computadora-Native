import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { useHistory } from "react-router";
import { TextInput } from "react-native-paper";

import { colorSchema } from "../../../common/constants/colorSchema";
import getDimensions from "../../../common/helpers/useDimension";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { windowWidth, windowHeight } = getDimensions(Dimensions);

const userContainerWidth = (windowWidth * 80) / 100;
const userContainerHeight = (windowHeight * 70) / 100;

const userImgWidth = (windowWidth * 30) / 100;
const userImgHeight = (windowWidth * 30) / 100;

const camWidth = 35;
const camHeight = 35;

const userImgDistanceLeft = userContainerWidth / 2 - userImgWidth / 2;

const sin45 = 0.85090352453;
const camDistanceTop = (userImgWidth / 2) * sin45 - camHeight - camHeight / 2;
const camDistanceLeft =
  userImgWidth / 2 +
  (userImgWidth / 2) * sin45 -
  camWidth / 2 +
  userImgDistanceLeft;

const inputElTop =
  userImgHeight / 2 - camHeight / 2 + userImgHeight + (windowHeight * 5) / 100;
const contentHeight = windowHeight - inputElTop - (windowHeight * 12) / 100;

const elHeight = (windowHeight * 12) / 100;

export default function Address() {
  const history = useHistory();
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => history.goBack()}
        style={styles.accountWrapper}
      >
        <View style={styles.headerContainer}>
          <Ionicons name="chevron-back" size={36} color={colorSchema.PRIMARY} />
          <Text style={styles.accountText}>Đổi mật khẩu</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.userContainer}>
        <View style={styles.userImageContainer}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={{
              uri: "https://nguoi-noi-tieng.com/photo/bo-ram-11339.png",
            }}
          />
        </View>
      </View>
      <View style={styles.inputElementContainer}>
        <View style={styles.reactNativeElementContainer}>
          <TextInput
            theme={{
              colors: { primary: colorSchema.PRIMARY },
            }}
            style={styles.input}
            label="Mật khẩu hiện tại"
            mode="outlined"
          />
        </View>
        <View style={styles.reactNativeElementContainer}>
          <TextInput
            theme={{
              colors: { primary: colorSchema.PRIMARY },
            }}
            style={styles.input}
            label="Mật khẩu mới"
            mode="outlined"
          />
        </View>
        <View style={styles.reactNativeElementContainer}>
          <TextInput
            theme={{
              colors: { primary: colorSchema.PRIMARY },
            }}
            style={styles.input}
            label="Xác nhận mật khẩu mới"
            mode="outlined"
          />
        </View>
        <TouchableOpacity style={styles.saveContainer}>
          <Text
            style={{
              fontSize: 36,
              color: colorSchema.WHITE,
              textAlign: "center",
            }}
          >
            Lưu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  accountWrapper: {
    height: "5%",
    width: "100%",
    top: "5%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountText: {
    fontSize: 30,
    color: colorSchema.DARK_PRIMARY,
    textAlign: "center",
  },
  userContainer: {
    position: "absolute",
    top: "20%",
    left: "10%",
    width: userContainerWidth,
    height: userContainerHeight,
    borderRadius: 20,
  },
  userImageContainer: {
    width: userImgWidth,
    height: userImgHeight,
    backgroundColor: colorSchema.WHITE,
    position: "absolute",
    left: userImgDistanceLeft,
    top: -userImgHeight / 2,
    borderRadius: 100,
    zIndex: 4,
    borderWidth: 1,
    overflow: "hidden",
  },
  cameraContainer: {
    width: camWidth,
    height: camHeight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorSchema.DARK_PRIMARY,
    borderRadius: 100,
    position: "relative",
    left: camDistanceLeft,
    top: camDistanceTop,
    zIndex: 99,
  },
  camIcon: {},
  inputElementContainer: {
    top: inputElTop,
    width: "80%",
    left: "10%",
    display: "flex",
    height: contentHeight,
    justifyContent: "space-evenly",
  },
  reactNativeElementContainer: {
    width: "100%",
  },
  saveContainer: {
    width: "100%",
    height: "10%",
    marginTop: 25,
    backgroundColor: colorSchema.PRIMARY,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    borderColor: colorSchema.PRIMARY,
  },
});
