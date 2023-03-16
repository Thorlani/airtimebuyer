import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  BackHandler,
  Modal,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MainScreen from "./MainScreen";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";
import ShareAppScreen from "./ShareAppScreen";
import CustomDrawerContent from "../components/CustomDrawer";
import ProfileHomeScreen from "./ProfileHomeScreen";

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          backgroundColor: "#E8907D",
          borderRadius: 35,
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
        initialParams={{ param: "goBack" }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#EAD9EB",
        drawerLabelStyle: { marginLeft: -20, color: "gray" },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={MainTabs}
        options={{
          drawerIcon: () => (
            <Ionicons name={"ios-home-outline"} size={22} color={"gray"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileHomeScreen}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="person-outline" size={22} color={"gray"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="account-edit"
              size={22}
              color="gray"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Share App"
        component={ShareAppScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="share-social-outline" size={22} color="gray" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const backAction = () => {
      setModalVisible(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  }, []);
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          style={[
            Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
            styles.backdrop,
          ]}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: 280,
              backgroundColor: "#E8907D",
              paddingVertical: 20,
              paddingHorizontal: 30,
              borderRadius: 20,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "600",
                  marginBottom: 15,
                  color: "#fff",
                }}
              >
                Log Out
              </Text>
              <Text style={{ marginBottom: 25, color: "#fff" }}>
                Are you sure you want to log out?
              </Text>
            </View>
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    width: 60,
                  }}
                  onPress={() => BackHandler.exitApp()}
                >
                  <Text style={{ color: "gray", textAlign: "center" }}>
                    Yes
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    width: 60,
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{ color: "gray", textAlign: "center" }}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.3,
  },
  androidBackdrop: {
    backgroundColor: "#232f34",
    opacity: 0.32,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
