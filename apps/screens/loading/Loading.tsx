import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useHistory } from "react-router";
import { route } from "../../common/configs/routes/routeName";
import { colorSchema } from "../../common/constants/colorSchema";
import { fetchingBlog } from "../../reduxToolKit-Saga/Blogs/BlogSlice";
import { useAppDispatch } from "../../reduxToolKit-Saga/hooks";
import { fetchingLaptop } from "../../reduxToolKit-Saga/Laptop/LaptopSlice";

export default function Loading() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      // dispatch(fetchingBlog());
      // dispatch(fetchingLaptop());
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  if (!isLoading) {
    setTimeout(() => {
      history.push(route.HOME);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/imgs/logo.png")} />
      {isLoading ? (
        <ActivityIndicator
          style={styles.loadingSpinner}
          size="large"
          color={colorSchema.WHITE}
        />
      ) : (
        <Text style={styles.loadingText}>Chào mừng bạn quay lại</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorSchema.PRIMARY,
  },
  loadingSpinner: {
    marginTop: 45,
  },
  loadingText: {
    marginTop: 45,
    fontSize: 23,
    color: colorSchema.WHITE,
  },
});
