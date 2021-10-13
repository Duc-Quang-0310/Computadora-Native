import React from "react";
import { View, Text, Button } from "react-native";
import { useHistory } from "react-router";
import { route } from "../../common/configs/routes/routeName";

export default function Home() {
  const history = useHistory();
  return (
    <View>
      <Text>This is Home</Text>
      <Button
        title="Click to sign In"
        onPress={() => history.push(route.SIGNIN)}
      />
    </View>
  );
}
