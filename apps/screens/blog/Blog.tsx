import React from "react";
import { View, Text } from "react-native";
import { useLocation } from "react-router";
import Navigator from "../../components/navigator/Navigator";

export default function Blog() {
  const location = useLocation().pathname;

  return (
    <View>
      <Text>This is Blog</Text>
      <Navigator location={location} />
    </View>
  );
}
