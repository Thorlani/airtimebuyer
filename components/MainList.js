import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function MainList() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#E8907D",
          height: 80,
          padding: 25,
          borderRadius: 20,
          marginBottom: 15,
        }}
        onPress={() => {}}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image
              source={require("../assets/9mobile.webp")}
              style={{ borderRadius: 50, width: 60, height: 60 }}
            />
          </View>
        </View>
        <View>
          <MaterialIcons name="navigate-next" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#E8907D",
          height: 80,
          padding: 25,
          borderRadius: 20,
          marginBottom: 15,
        }}
        onPress={() => {}}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image
              source={require("../assets/mtn.webp")}
              style={{ borderRadius: 50, width: 60, height: 60 }}
            />
          </View>
        </View>
        <View>
          <MaterialIcons name="navigate-next" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#E8907D",
          height: 80,
          padding: 25,
          borderRadius: 20,
          marginBottom: 15,
        }}
        onPress={() => {}}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image
              source={require("../assets/airtel.webp")}
              style={{ width: 60, height: 60 }}
            />
          </View>
        </View>
        <View>
          <MaterialIcons name="navigate-next" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#E8907D",
          height: 80,
          padding: 25,
          borderRadius: 20,
          marginBottom: 15,
        }}
        onPress={() => {}}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image
              source={require("../assets/glo.webp")}
              style={{ borderRadius: 50, width: 60, height: 60 }}
            />
          </View>
        </View>
        <View>
          <MaterialIcons name="navigate-next" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 0,
  },
});
