import React from "react";
import { View, Text } from "react-native";
import { useLocation } from "react-router";
import Navigator from "../../components/navigator/Navigator";

export default function Profile() {
  const location = useLocation().pathname;
  return (
    <View>
      <Text>This is Profile</Text>
      <Navigator location={location} />
    </View>
  );
}
