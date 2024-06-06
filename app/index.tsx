import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import Navigator from "../src/navigation";
import { Amplify } from "aws-amplify";

import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

import { withAuthenticator } from "aws-amplify-react-native";
function Index() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withAuthenticator(Index);
