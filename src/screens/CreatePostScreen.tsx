import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};
const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const onSubmit = () => {
    console.warn("Submit", description);

    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={{ uri: user.image }} />
        <Text style={styles.name}>{user.name}</Text>

        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>

      <TextInput
        onChangeText={setDescription}
        value={description}
        placeholder="What's on your mind"
        multiline
      />

      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button title="Post" onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
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
  buttonContainer: {
    marginTop: "auto",
  },
  icon: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
});

export default CreatePostScreen;
