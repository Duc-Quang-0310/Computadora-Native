import React from "react";
import { View, Text } from "react-native";
import { useLocation } from "react-router";
import Navigator from "../../components/navigator/Navigator";

export default function Cart() {
  const location = useLocation().pathname;
  return (
    <View>
      <Text>This is Cart</Text>
      <Navigator location={location} />
    </View>
  );
}
