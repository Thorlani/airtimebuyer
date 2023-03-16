import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MainHeader from "../components/MainHeader";
import MainList from "../components/MainList";

export default function MainScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#EAD9EB",
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <MainHeader navigation={navigation} />
      </View>
      <View style={{ width: "100%", height: 600 }}>
        <MainList />
      </View>
    </View>
  );
}
