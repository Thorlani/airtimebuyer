import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "./SigninScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./loginScreen";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function OnboardingScreen({ navigation, route }) {
  const isloggedin = useSelector((state) => state.Auth);
  const { page } = route.params;
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {page === "login" ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BD84D8",
    alignItems: "center",
    justifyContent: "center",
  },
});
