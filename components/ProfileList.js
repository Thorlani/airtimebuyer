import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function ProfileList({ navigation }) {
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
          marginVertical: 15,
        }}
        onPress={() => navigation.navigate("Edit Profile")}
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
        onPress={() => navigation.navigate("Share App")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
          <Ionicons name="share-social-outline" size={24} color="#fff" />
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
    paddingTop: 80,
  },
});
