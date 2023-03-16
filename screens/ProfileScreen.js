import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHomeScreen from "./ProfileHomeScreen";
import ShareAppScreen from "./ShareAppScreen";
import EditProfileScreen from "./EditProfileScreen";

const Stack = createNativeStackNavigator();

export default function ProfileScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileHomeScreen"
          component={ProfileHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShareAppScreen"
          component={ShareAppScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
