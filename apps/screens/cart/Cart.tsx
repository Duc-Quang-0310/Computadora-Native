import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useLocation, useHistory } from "react-router";
import { colorSchema } from "../../common/constants/colorSchema";
import Navigator from "../../components/navigator/Navigator";
import { Ionicons } from "@expo/vector-icons";

export default function Cart() {
  const location = useLocation().pathname;
  const history = useHistory();
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
    fontSize: 20,
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
});
