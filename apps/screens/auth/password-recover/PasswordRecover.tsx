import { Formik } from "formik";
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
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { colorSchema } from "../../../common/constants/colorSchema";
import { useHistory } from "react-router";
import { route } from "../../../common/configs/routes/routeName";
import {
  validatePWRecoverObject,
  validatePWRecoverSchema,
} from "../../../common/helpers/authValidateObj";

export default function PasswordRecover() {
  const history = useHistory();
  const [seePassword, setSeePassword] = useState(true);

  function redirectToSignIn() {
    history.push(route.SIGNIN);
  }

  function redirectToSignUp() {
    history.push(route.SIGNUP);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => history.push(route.HOME)}>
        <Image
          source={require("../../../assets/imgs/logo-primary.png")}
          style={{ alignSelf: "center", marginBottom: 30 }}
        />
      </TouchableWithoutFeedback>

      <Formik
        initialValues={validatePWRecoverObject}
        validationSchema={validatePWRecoverSchema}
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
                  touched.email && errors.email ? styles.borderDanger : null,
                ]}
                placeholder="example@gmail.com"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              <AntDesign
                style={styles.icon}
                name="mail"
                size={29}
                color={colorSchema.ICON_COLOR}
              />
              {touched.email && errors.email && (
                <Text style={styles.textDanger}>{errors.email}</Text>
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
                onPress={() => redirectToSignIn()}
              >
                Đăng nhập
              </Text>
              <Text
                onPress={() => redirectToSignUp()}
                style={[styles.textRedirect, { marginLeft: "auto" }]}
              >
                Đăng ký
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => handleSubmit()}
            >
              <Text style={{ color: colorSchema.WHITE, fontSize: 20 }}>
                Lấy lại tài khoản
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
    marginVertical: 8,
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
