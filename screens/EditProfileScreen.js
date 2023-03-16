import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Edit Profile </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAD9EB",
    justifyContent: "center",
    alignItems: "center",
  },
});
