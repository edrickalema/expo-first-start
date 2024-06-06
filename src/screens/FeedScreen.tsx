import React, { useEffect, useState } from "react";
import FeedPost from "../components/FeedPost";
import { FlatList, StyleSheet, Pressable, Image, Text } from "react-native";

import data from "../../assets/data/posts.json";
import { Entypo } from "@expo/vector-icons";

import ListHeaderComponent from "../components/ListHeaderComponent";
import { DataStore } from "aws-amplify";

const FeedScreen = () => {
  // const [data, setData] = useState([])

  return (
    <>
      <ListHeaderComponent />
      <FlatList
        data={data}
        renderItem={(post) => {
          return <FeedPost {...post.item}></FeedPost>;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
});
export default FeedScreen;
