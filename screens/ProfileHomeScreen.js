import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ProfileList from "../components/ProfileList";
import ProfileHeader from "../components/ProfileHeader";

export default function ProfileHomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EAD9EB",
      }}
    >
      <ProfileHeader />
      <ProfileList navigation={navigation} />
    </View>
  );
}
