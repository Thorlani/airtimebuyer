import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function MainHeader() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 50,
          justifyContent: "flex-start",
          alignItems: "flex-end",
          position: "relative",
          top: 40
        }}
      >
        <MaterialIcons name="segment" size={32} color="#E8907D" />
      </View>
      <View style={{ position: "relative", top: 70, height: 90, }}>
        <Text style={{ fontSize: 24, fontWeight: "800", color: "#fff" }}>
          Hi, Popoola Omotolani
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "gray",
            textAlign: "center",
          }}
        >
          What airtime would you like to buy?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 90,
  },
});
