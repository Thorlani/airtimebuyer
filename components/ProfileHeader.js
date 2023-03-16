import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileHeader({ navigation, route }) {
  return (
    <View style={styles.container}>
      {!route ? (
        <TouchableOpacity
          style={{
            width: "100%",
            alignItems: "flex-end",
            marginTop: 10,
            paddingBottom: 10,
            marginBottom: 40,
            fontSize: 16,
            fontWeight: "800",
            color: "#fff",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-return-up-back" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            width: "100%",
            alignItems: "flex-end",
            marginTop: 10,
            paddingBottom: 10,
            marginBottom: 40,
            fontSize: 16,
            fontWeight: "800",
            color: "#fff",
          }}
        >
          <Text></Text>
        </TouchableOpacity>
      )}
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
