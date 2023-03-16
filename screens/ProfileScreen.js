import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHomeScreen from "./ProfileHomeScreen";
import ShareAppScreen from "./ShareAppScreen";
import EditProfileScreen from "./EditProfileScreen";

const Stack = createNativeStackNavigator();

export default function ProfileScreen({ route }) {
  const showBack = route.params;
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileHomeScreen}
          options={{ headerShown: false }}
          initialParams={{ param: showBack.param }}
        />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Share App"
          component={ShareAppScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
