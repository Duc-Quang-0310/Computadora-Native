import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
} from "react-native";
import { colorSchema } from "../../common/constants/colorSchema";
import { AntDesign } from "@expo/vector-icons";
import { useHistory } from "react-router";
import { route } from "../../common/configs/routes/routeName";

interface iSearchBarProps {
  location: string;
}

export default function SearchBar({ location }: iSearchBarProps) {
  const history = useHistory();
  const isSearchPage = location === route.SEARCH;

  return (
    <View
      style={[styles.searchWrapper, !isSearchPage && { alignItems: "center" }]}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {isSearchPage && (
          <TouchableNativeFeedback onPress={() => history.goBack()}>
            <AntDesign
              name="left"
              size={30}
              color="#fff"
              style={styles.backIcon}
            />
          </TouchableNativeFeedback>
        )}

        <View
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextInput style={styles.input} placeholder="Bạn muốn tìm gì" />
          <AntDesign
            name="search1"
            size={22}
            color="black"
            style={styles.iconSearch}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    height: 122,
    backgroundColor: colorSchema.PRIMARY,
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    paddingLeft: 60,
    paddingVertical: 10,
    borderRadius: 200,
    backgroundColor: colorSchema.WHITE,
    fontSize: 16,
  },
  iconSearch: {
    position: "absolute",
    left: "8%",
    top: 11,
    opacity: 0.5,
  },

  backIcon: {
    marginTop: 9,
    marginRight: 30,
    paddingLeft: 10,
  },
});
