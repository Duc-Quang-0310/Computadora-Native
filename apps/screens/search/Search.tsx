import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useLocation } from "react-router";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Search() {
  const location = useLocation().pathname;

  return (
    <View style={{ flex: 1 }}>
      <SearchBar location={location} />
      <ScrollView style={{ paddingVertical: 20 }}>
        <Image source={require("../../assets/imgs/search.png")} />
      </ScrollView>
    </View>
  );
}
