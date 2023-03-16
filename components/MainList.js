import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
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
            <MaterialIcons name="person-outline" size={24} color="#fff" />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Edit Profile</Text>
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
            <MaterialIcons name="share" size={24} color="#fff" />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Help share the app
            </Text>
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
            <MaterialIcons name="share" size={24} color="#fff" />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Help share the app
            </Text>
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
