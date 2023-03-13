import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Intro Page </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around", width: "50%" }}>
        <Button
          title="Log in"
          onPress={() => navigation.navigate("Signin", { page: "login" })}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Signin", { page: "signup" })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
