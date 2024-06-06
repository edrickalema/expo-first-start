import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/FeedScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import UpdateProfileScreen from "../screens/UpdateProfileScreen";

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <FontAwesome
                onPress={() => navigation.navigate("Profile")}
                name="user"
                size={24}
                color="gray"
              />
            ),
          })}
        />
        <Stack.Screen name="Create Post" component={CreatePostScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{ id: "" }}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfileScreen}
          initialParams={{ id: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
