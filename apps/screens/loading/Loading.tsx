import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import { useHistory } from "react-router";
import { route } from "../../common/configs/routes/routeName";

export default function Loading() {
  const history = useHistory();
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is Loading</Text>
      <Button title="Click to home" onPress={() => history.push(route.HOME)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dcdcdc",
  },
});
