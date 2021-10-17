import React from "react";
import {
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Button,
  View,
} from "react-native";
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { colorSchema } from "../../common/constants/colorSchema";
import { useHistory } from "react-router";
import { route } from "../../common/configs/routes/routeName";

interface iNavProps {
  location: string;
}

const Navigator: React.FunctionComponent<iNavProps> = ({ location }) => {
  const history = useHistory();
  const currentLocation = (location: string): number => {
    let result = 0;
    if (location === route.HOME) {
      result = 0;
    }
    if (location === route.LAPTOP) {
      result = 1;
    }
    if (location === route.PROFILE) {
      result = 2;
    }
    if (location === route.BLOG) {
      result = 3;
    }
    if (location === route.CART) {
      result = 4;
    }

    return result;
  };

  const Redirect = (pathname: string) => {
    history.push(pathname);
  };

  return (
    <View style={styles.navContainer}>
      <TouchableWithoutFeedback onPress={() => Redirect(route.HOME)}>
        <View style={styles.iconBox}>
          <Feather
            name="home"
            size={24}
            style={[
              styles.icon,
              currentLocation(location) === 0 && styles.active,
            ]}
          />
          <Text
            style={[
              styles.navText,
              currentLocation(location) === 0 && styles.active,
            ]}
          >
            Trang chủ
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Redirect(route.LAPTOP)}>
        <View style={[styles.iconBox]}>
          <FontAwesome
            name="laptop"
            size={24}
            style={[
              styles.icon,
              currentLocation(location) === 1 && styles.active,
            ]}
          />
          <Text
            style={[
              styles.navText,
              currentLocation(location) === 1 && styles.active,
            ]}
          >
            Sản phẩm
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Redirect(route.PROFILE)}>
        <View style={styles.iconBox}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            style={[
              styles.icon,
              currentLocation(location) === 2 && styles.active,
            ]}
          />
          <Text
            style={[
              styles.navText,
              currentLocation(location) === 2 && styles.active,
            ]}
          >
            Tài khoản
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Redirect(route.BLOG)}>
        <View style={styles.iconBox}>
          <AntDesign
            name="book"
            size={24}
            style={[
              styles.icon,
              currentLocation(location) === 3 && styles.active,
            ]}
          />
          <Text
            style={[
              styles.navText,
              currentLocation(location) === 3 && styles.active,
            ]}
          >
            Blog
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Redirect(route.CART)}>
        <View style={styles.iconBox}>
          <AntDesign
            name="shoppingcart"
            size={24}
            style={[
              styles.icon,
              currentLocation(location) === 4 && styles.active,
            ]}
          />
          <Text
            style={[
              styles.navText,
              currentLocation(location) === 4 && styles.active,
            ]}
          >
            Giỏ hàng
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  iconBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    color: colorSchema.BLACK,
    opacity: 0.4,
  },
  navText: {
    marginTop: 3,
    opacity: 0.4,
  },
  active: {
    color: colorSchema.PRIMARY,
  },
});
