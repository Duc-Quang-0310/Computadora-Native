import React from "react";
import { View, Text } from "react-native";
import { useLocation } from "react-router";
import Navigator from "../../components/navigator/Navigator";

export default function Laptop() {
  const location = useLocation().pathname;
  return (
    <View>
      <Text>This is Laptop</Text>
      <Navigator location={location} />
    </View>
  );
}
