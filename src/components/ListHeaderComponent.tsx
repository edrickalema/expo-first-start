import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
const img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const ListHeaderComponent = () => {
  const navigation = useNavigation<any>();
  const createPost = () => {
    navigation.navigate("Create Post");
  };
  return (
    <Pressable onPress={createPost} style={styles.header}>
      <Image source={{ uri: img }} style={styles.profileImage} />
      <Text style={styles.name}>What's on your mind?</Text>
      <Entypo name="images" size={24} color="limegreen" style={styles.icon} />
    </Pressable>
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
export default ListHeaderComponent;
