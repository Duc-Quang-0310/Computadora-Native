import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Formik } from "formik";
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { colorSchema } from "../../../common/constants/colorSchema";
import { route } from "../../../common/configs/routes/routeName";
import { useHistory } from "react-router";
import {
  validateSignInObject,
  validateSignInSchema,
} from "../../../common/helpers/authValidateObj";

export default function SignIn() {
  const history = useHistory();
  const [seePassword, setSeePassword] = useState(true);

  function redirectToSignUp() {
    history.push(route.SIGNUP);
  }

  function redirectToPWRecover() {
    history.push(route.PWRECOVER);
  }

  //handle Logic Here

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => history.push(route.HOME)}>
        <Image
          style={{ alignSelf: "center", marginBottom: 30 }}
          source={require("../../../assets/imgs/logo-primary.png")}
        />
      </TouchableWithoutFeedback>

      <Formik
        initialValues={validateSignInObject}
        validationSchema={validateSignInSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View style={styles.iconView}>
              <TextInput
                style={[
                  styles.input,
                  touched.username && errors.username
                    ? styles.borderDanger
                    : null,
                ]}
                placeholder="Tài khoản"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                maxLength={25}
              />

              <MaterialCommunityIcons
                style={styles.icon}
                name="shield-account-outline"
                size={29}
                color={colorSchema.ICON_COLOR}
              />
              {touched.username && errors.username && (
                <Text style={styles.textDanger}>{errors.username}</Text>
              )}
            </View>

            <View style={styles.iconView}>
              <TextInput
                style={[
                  styles.input,
                  touched.password && errors.password
                    ? styles.borderDanger
                    : null,
                ]}
                placeholder="Mật khẩu"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                maxLength={20}
                secureTextEntry={seePassword}
              />
              <AntDesign
                name="lock1"
                size={29}
                color={colorSchema.ICON_COLOR}
                style={styles.icon}
              />
              {seePassword ? (
                <Entypo
                  style={[styles.passwordEye]}
                  name="eye-with-line"
                  size={22}
                  color={colorSchema.ICON_COLOR}
                  onPress={() => setSeePassword(false)}
                />
              ) : (
                <Entypo
                  name="eye"
                  size={22}
                  color={colorSchema.ICON_COLOR}
                  style={styles.passwordEye}
                  onPress={() => setSeePassword(true)}
                />
              )}
              {touched.password && errors.password && (
                <Text style={styles.textDanger}>{errors.password}</Text>
              )}
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={styles.textRedirect}
                onPress={() => redirectToSignUp()}
              >
                Đăng ký
              </Text>
              <Text
                onPress={() => redirectToPWRecover()}
                style={[styles.textRedirect, { marginLeft: "auto" }]}
              >
                Quên mật khẩu ?
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => handleSubmit()}
            >
              <Text style={{ color: colorSchema.WHITE, fontSize: 20 }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <Image
        style={styles.welcomePicture}
        source={require("../../../assets/imgs/welcome.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 35,
    position: "relative",
  },
  centerView: {
    display: "flex",
  },
  input: {
    height: 66,
    borderWidth: 1,
    paddingLeft: 80,
    borderRadius: 10,
    borderColor: colorSchema.ICON_COLOR,
    fontSize: 18,
  },
  iconView: {
    position: "relative",
    marginVertical: 18,
  },
  icon: {
    position: "absolute",
    left: 30,
    top: 16,
  },
  passwordEye: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  buttonStyle: {
    backgroundColor: colorSchema.PRIMARY,
    paddingVertical: 22,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  welcomePicture: {
    position: "absolute",
    width: 221,
    height: 114,
    bottom: 0,
    alignSelf: "center",
  },
  textRedirect: {
    color: colorSchema.BLACK,
    opacity: 0.6,
  },
  textDanger: {
    color: colorSchema.TEXT_DANGER,
    marginTop: 5,
  },
  borderDanger: {
    borderColor: colorSchema.TEXT_DANGER,
  },
});
