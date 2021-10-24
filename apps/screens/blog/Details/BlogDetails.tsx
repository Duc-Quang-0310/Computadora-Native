import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useParams, useHistory } from "react-router-native";
import { colorSchema } from "../../../common/constants/colorSchema";
import { iBlogData } from "../../../services/apiTypes";
import { blogService } from "../../../services/ortherService";
import { Ionicons } from "@expo/vector-icons";

interface params {
  id: string;
}

interface responseType {
  success: boolean;
  data: iBlogData;
}

export default function BlogDetails() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<iBlogData>();
  const params: params = useParams();
  const history = useHistory();

  const getBlogDetails = async (id: string) => {
    try {
      const response: responseType = await blogService.getDetails(id);
      if (response.success) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loading && getBlogDetails(params.id);
  }, [loading]);

  const render = (mainBlog: string[] | undefined) => {
    mainBlog?.length &&
      mainBlog.map((item, index) =>
        item.includes("https") ? (
          <Image source={{ uri: item }} key={index} />
        ) : (
          <Text key={index}>{item}</Text>
        )
      );
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colorSchema.PRIMARY}
          style={{ top: "50%" }}
        />
      ) : (
        <>
          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => history.goBack()}>
              <Ionicons
                name="chevron-back"
                size={30}
                color={colorSchema.DARK_PRIMARY}
              />
            </TouchableWithoutFeedback>

            <Text style={styles.header_text}>{data?.headline}</Text>
          </View>

          <ScrollView>
            <Image
              resizeMode="cover"
              style={styles.image_headLine}
              source={{ uri: data?.imgHeadline[0] }}
            />
            <View style={styles.content}>
              {data?.blog?.length &&
                data?.blog.map((item, index) =>
                  item.includes("https") ? (
                    <Image
                      style={styles.image_blog}
                      source={{ uri: item }}
                      key={index}
                    />
                  ) : (
                    item !== "" && (
                      <Text style={styles.content_text} key={index}>
                        {item}
                      </Text>
                    )
                  )
                )}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 25,
    paddingBottom: 10,
  },
  header_text: {
    width: "80%",
    fontWeight: "bold",
    fontSize: 16,
    color: colorSchema.DARK_PRIMARY,
  },
  image_headLine: {
    height: 250,
    marginBottom: 30,
  },
  image_blog: {
    height: 200,
    marginVertical: 10,
  },
  content: {
    paddingHorizontal: 30,
  },
  content_text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
