import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import { useHistory, useLocation } from "react-router";
import { route } from "../../common/configs/routes/routeName";
import { colorSchema } from "../../common/constants/colorSchema";
import Navigator from "../../components/navigator/Navigator";
import SearchBar from "../../components/searchBar/SearchBar";
import Carousel from "react-native-snap-carousel";

export default function Home() {
  const history = useHistory();
  const location = useLocation().pathname;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SearchBar location={location} />
        {/* <Carousel layout={"default"} data={} /> */}
        <Text style={styles.contentWrapper}>Main</Text>
        <Button title="Click me" onPress={() => history.push(route.SEARCH)} />
      </ScrollView>
      <Navigator location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colorSchema.LIGHT_GREY,
  },
});
