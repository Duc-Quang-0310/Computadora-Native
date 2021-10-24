import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useHistory, useLocation } from "react-router";
import { colorSchema } from "../../common/constants/colorSchema";
import Navigator from "../../components/navigator/Navigator";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { route } from "../../common/configs/routes/routeName";

const iconSize = 30;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const userContainerWidth = (windowWidth * 80) / 100;
const userContainerHeight = (windowHeight * 70) / 100;

const userImgWidth = (windowWidth * 30) / 100;
const userImgHeight = (windowWidth * 30) / 100;

const userImgDistanceLeft = userContainerWidth / 2 - userImgWidth / 2;

const userInfoContentHeight = userContainerHeight - userImgHeight / 2;
export default function Profile() {
  const location = useLocation().pathname;
  const history = useHistory();
  return (
    <SafeAreaView style={[{ flex: 1 }, styles.contentWrapper]}>
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.accountWrapper}>
          <Text style={styles.accountText}>Tài Khoản</Text>
        </View>

        <View style={styles.userContainer}>
          <View style={styles.userImageContainer}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              source={{
                uri: "https://nguoi-noi-tieng.com/photo/bo-ram-11339.png",
              }}
            />
          </View>

          <View style={styles.userContentWrapper}>
            <View
              style={{
                height: "95%",
                position: "absolute",
                top: "5%",
                width: "100%",
              }}
            >
              <Text style={styles.userName}>Ky Anh Pro</Text>
              <View style={styles.userInfoContainer}>
                <View style={styles.userBaseInfo}>
                  <View style={styles.userInfoKey}>
                    <View style={styles.userInfoKeyIcon}>
                      <FontAwesome name="male" size={iconSize} color="black" />
                    </View>
                    <Text style={styles.userInfoKeyText}>Giới tính</Text>
                  </View>
                  <View style={styles.userInfoValue}>
                    <Text style={styles.userInfoTextValue}>Nam</Text>
                  </View>
                </View>
                <View style={styles.userBaseInfo}>
                  <View style={styles.userInfoKey}>
                    <View style={styles.userInfoKeyIcon}>
                      <Entypo name="phone" size={24} color="black" />
                    </View>
                    <Text style={styles.userInfoKeyText}>Số điện thoại</Text>
                  </View>
                  <View style={styles.userInfoValue}>
                    <Text style={styles.userInfoTextValue}>0968374305</Text>
                  </View>
                </View>
                <View style={styles.userBaseInfo}>
                  <View style={styles.userInfoKey}>
                    <View style={styles.userInfoKeyIcon}>
                      <FontAwesome name="calendar" size={24} color="black" />
                    </View>
                    <Text style={styles.userInfoKeyText}>Ngày sinh</Text>
                  </View>
                  <View style={styles.userInfoValue}>
                    <Text style={styles.userInfoTextValue}>28/07/2000</Text>
                  </View>
                </View>
                <View style={styles.userBaseInfo}>
                  <View style={styles.userInfoKey}>
                    <View style={styles.userInfoKeyIcon}>
                      <MaterialCommunityIcons
                        name="email"
                        size={24}
                        color="black"
                      />
                    </View>
                    <Text style={styles.userInfoKeyText}>Email</Text>
                  </View>
                  <View style={styles.userInfoValue}>
                    <Text style={styles.userInfoTextValue} numberOfLines={1}>
                      hunghuu0968374@gmail.com
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                />

                {/* user action.... */}

                <TouchableOpacity
                  onPress={() => history.push(route.ADDRESS)}
                  style={styles.userBaseInfo}
                >
                  <View style={styles.userInfoKey}>
                    <View style={styles.userInfoKeyIcon}>
                      <Foundation
                        name="pencil"
                        size={24}
                        color={colorSchema.PRIMARY}
                      />
                    </View>
                    <Text style={styles.userActionText}>Sửa thông tin</Text>
                  </View>
                  <View style={styles.userInfoValue}>
                    <FontAwesome5
                      name="greater-than"
                      size={24}
                      color={colorSchema.PRIMARY}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userBaseInfo}>
                  <View style={styles.userInfoKey}>
                    <View style={styles.userInfoKeyIcon}>
                      <Entypo
                        name="back-in-time"
                        size={24}
                        color={colorSchema.PRIMARY}
                      />
                    </View>
                    <Text style={styles.userActionText}>Lịch sử mua hàng</Text>
                  </View>
                  <View style={styles.userInfoValue}>
                    <FontAwesome5
                      name="greater-than"
                      size={24}
                      color={colorSchema.PRIMARY}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => history.push(route.PW_CHANGE)}
                  style={styles.userBaseInfo}
                >
                  <View style={styles.userInfoKey}>
                    <View style={styles.userInfoKeyIcon}>
                      <Foundation
                        name="pencil"
                        size={24}
                        color={colorSchema.PRIMARY}
                      />
                    </View>
                    <Text style={styles.userActionText}>Đổi mật khẩu</Text>
                  </View>
                  <View style={styles.userInfoValue}>
                    <FontAwesome5
                      name="greater-than"
                      size={24}
                      color={colorSchema.PRIMARY}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userBaseInfo}>
                  <View style={styles.userInfoKey}>
                    <View style={styles.userInfoKeyIcon}>
                      <Entypo
                        name="log-out"
                        size={24}
                        color={colorSchema.PRIMARY}
                      />
                    </View>
                    <Text style={styles.userActionText}>Đăng xuất</Text>
                  </View>
                  <View style={styles.userInfoValue}>
                    <FontAwesome5
                      name="greater-than"
                      size={24}
                      color={colorSchema.PRIMARY}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Navigator location={location} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colorSchema.BACKGROUND,
  },
  accountWrapper: {
    height: "5%",
    width: "100%",
    position: "absolute",
    top: "5%",
    display: "flex",
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
    backgroundColor: colorSchema.WHITE,
    borderRadius: 20,
  },
  userContentWrapper: {
    height: userInfoContentHeight,
    width: "100%",
    position: "absolute",
    top: userImgHeight / 2,
  },

  userImageContainer: {
    width: userImgWidth,
    height: userImgHeight,
    backgroundColor: colorSchema.PRIMARY,
    position: "absolute",
    left: userImgDistanceLeft,
    top: -userImgHeight / 2,
    borderRadius: 100,
    zIndex: 4,
    overflow: "hidden",
  },
  userName: {
    height: "10%",
    zIndex: 22,
    width: "100%",
    color: colorSchema.PRIMARY,
    textAlign: "center",
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfoContainer: {
    width: "86%",
    left: "6%",
    height: "90%",
    display: "flex",
    justifyContent: "space-between",
  },
  userBaseInfo: {
    width: "100%",
    height: "11.25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfoKey: {
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userInfoValue: {
    width: "auto",
    justifyContent: "center",
    textAlign: "center",
  },
  userInfoTextValue: {
    textAlignVertical: "center",
    fontSize: 20,
    height: "100%",
    maxWidth: 250,
    alignSelf: "flex-start",
  },
  userInfoKeyIcon: {
    width: 30,
    overflow: "hidden",
  },
  userInfoKeyText: {
    left: 10,
    fontSize: 22,
  },
  userActionText: {
    left: 10,
    fontSize: 22,
    color: colorSchema.BLACK,
  },
});
