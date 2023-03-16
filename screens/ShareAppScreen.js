import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function ShareAppScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: "center"}}>
        App not published yet. You will be able to share this app when it is
        published
      </Text>
      <TouchableOpacity
        style={{ padding: 20, backgroundColor: "#E8907D", borderRadius: 20, marginTop: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAD9EB",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
});
