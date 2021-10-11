import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Application from "./apps/Application";
import { persistor, store } from "./apps/reduxToolKit-Saga/store";

export default function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Application />
        </SafeAreaView>
      </Provider>
    </PersistGate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
  },
});
