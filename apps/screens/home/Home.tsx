import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { useHistory, useLocation } from "react-router";
import { route } from "../../common/configs/routes/routeName";
import { colorSchema } from "../../common/constants/colorSchema";
import Navigator from "../../components/navigator/Navigator";
import SearchBar from "../../components/searchBar/SearchBar";
import Carousel from "react-native-snap-carousel";
import { useAppSelector } from "../../reduxToolKit-Saga/hooks";
import { RootState } from "../../reduxToolKit-Saga/store";
import Spinner from "react-native-loading-spinner-overlay";
import {
  iBlogData,
  iBlogResponseType,
  iLaptopData,
} from "../../services/apiTypes";
import { blogService } from "../../services/ortherService";

export default function Home() {
  const history = useHistory();
  const location = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState<iBlogData[]>([]);
  const laptopdata = useAppSelector<iLaptopData[]>(
    (state: RootState) => state.laptop.datas
  );
  const [index, setIndex] = useState(0);
  const carouselItems = [
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ];

  const fetchBlogData = async () => {
    try {
      setIsLoading(true);
      const response: iBlogResponseType = await blogService.getAll();
      if (response.success) {
        setBlogData(response.data);
      }
    } catch (error: any) {
      console.log(error.response.data.success);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchBlogData();
    }
  }, [isLoading]);

  const renderCarousel = ({ item }: any) => {
    return (
      <View style={styles.carouselView}>
        {/* <Image source={item.} /> */}
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ScrollView>
            <SearchBar location={location} />
            <View style={styles.centerFlexContainer}>
              <Carousel
                layout={"default"}
                data={carouselItems}
                sliderWidth={350}
                itemWidth={300}
                renderItem={renderCarousel}
                onSnapToItem={(index) => setIndex(index)}
              />
            </View>

            <Text style={styles.contentWrapper}>Main</Text>
            <Button
              title="Click me"
              onPress={() => history.push(route.LOADING)}
            />
          </ScrollView>
          <Navigator location={location} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colorSchema.LIGHT_GREY,
  },
  carouselView: {
    borderRadius: 5,
    height: 200,
    backgroundColor: colorSchema.DARK_PRIMARY,
  },
  centerFlexContainer: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 20,
  },
});
