import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Application from "./apps/Application";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Application />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
  },
});
