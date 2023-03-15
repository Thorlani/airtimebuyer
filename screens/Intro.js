import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/intro.png")}
        style={{ width: "60%", height: 200 }}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#8C52FF",
            padding: 15,
            width: "45%",
            borderRadius: 10,
            margin: 10,
          }}
          onPress={() => navigation.push("Onboarding", { page: "login" })}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#FD7F32",
              fontSize: 16,
              fontWeight: "800",
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#8C52FF",
            padding: 15,
            width: "45%",
            borderRadius: 10,
            margin: 10,
          }}
          onPress={() => navigation.navigate("Onboarding", { page: "signup" })}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#FD7F32",
              fontSize: 16,
              fontWeight: "800",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BD84D8",
    alignItems: "center",
    justifyContent: "center",
  },
});
