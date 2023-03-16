import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "left",
          marginTop: 20,
          marginBottom: 40,
          fontSize: 16,
          fontWeight: "800",
          color: "#fff",
        }}
      >
        Profile
      </Text>
      <View style={styles.wrapper}>
        <View style={styles.image}>
          <Image
            source={require("../assets/icon.png")}
            style={{ width: 80, height: 80, borderRadius: 50 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "800", color: "#fff" }}>
            Popoola Omotolani
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    backgroundColor: "#E8907D",
    width: "100%",
    height: 300,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    padding: 40,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 18,
  },
});
