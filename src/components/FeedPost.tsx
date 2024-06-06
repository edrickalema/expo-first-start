import { StyleSheet, Image, Text, View, Pressable } from "react-native";
// import { Entypo } from "@expo/vector-icons";

import like_image from "../../assets/images/like.png";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const post = {
  id: "p1",
  createdAt: "19 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Vadim Savin",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};

export type PostProps = {
  id: string;
  createdAt: string;
  User: {
    id: string;
    image: string;
    name: string;
  };
  description: string;
  image?: string;
  numberOfLikes: number;
  numberOfShares: number;
};
const FeedPost = (props: PostProps) => {
  const navigation = useNavigation<any>();
  const [isLiked, setIsliked] = useState<boolean>(false);
  const { description, User, image, numberOfLikes, numberOfShares } = props;
  return (
    <>
      {/* post  */}
      <View style={styles.post}>
        {/* Header of the post */}
        <Pressable
          onPress={() => {
            navigation.navigate("Profile", { id: post.User.id });
          }}
          style={styles.header}
        >
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="gray"
            style={styles.icon}
          />
        </Pressable>

        <View style={styles.body}>
          {post.description && (
            <Text style={styles.description}>{post.description}</Text>
          )}
          {post.image && (
            <Image
              source={{ uri: post.image ? post.image : "" }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <View style={styles.stats}>
            <Image style={styles.like_icon} source={like_image} />
            <Text style={styles.liked_by}>
              Elon Musk and {post.numberOfLikes} others
            </Text>
            <Text style={styles.shares}>
              {post.numberOfShares}{" "}
              {post.numberOfShares > 1 ? "shares" : "share"}
            </Text>
          </View>

          <View style={styles.actions}>
            <View style={styles.iconButton}>
              <FontAwesome5
                name="comment-alt"
                size={18}
                color={"gray"}
              ></FontAwesome5>
              <Text style={styles.buttonText}>Comment</Text>
            </View>
            <Pressable
              style={styles.iconButton}
              onPress={() => {
                setIsliked(!isLiked);
              }}
            >
              <AntDesign
                name="like2"
                size={18}
                color={isLiked ? "royalblue" : "gray"}
              ></AntDesign>
              <Text
                style={[
                  styles.buttonText,
                  { color: isLiked ? "royalblue" : "gray" },
                ]}
              >
                Like
              </Text>
            </Pressable>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons
                name="share-outline"
                size={18}
                color={"gray"}
              ></MaterialCommunityIcons>
              <Text style={styles.buttonText}>Share</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#fff",
    marginVertical: 5,
  },

  // Header content
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },

  // Body content
  body: {},
  description: {
    padding: 10,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  image: {
    width: "100%",

    aspectRatio: 1,
    marginTop: 10,
  },

  // Footer content
  footer: {
    paddingHorizontal: 10,
  },
  stats: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBlockColor: " gray",
  },
  like_icon: {
    width: 20,
    height: 20,
  },
  liked_by: {
    marginLeft: 5,
    color: "gray",
  },
  shares: {
    marginLeft: "auto",
    color: "gray",
  },
  actions: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 5,
    fontWeight: "500",
    color: "gray",
  },
});

export default FeedPost;
