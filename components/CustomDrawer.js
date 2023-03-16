import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  Modal,
  Pressable,
} from "react-native";

export default function CustomDrawerContent(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#EAD9EB" }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#E8907D" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: 10,
            paddingBottom: 20,
          }}
        >
          <View style={styles.wrapper}>
            <View style={styles.image}>
              <Image
                source={require("../assets/icon.png")}
                style={{ width: 80, height: 80, borderRadius: 50 }}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.closeDrawer()}
            style={{ marginTop: 30, paddingRight: 15 }}
          >
            <Feather name="x" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "#EAD9EB", paddingTop: 20 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 30, borderTopWidth: 1, borderTopColor: "gray" }}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => setModalVisible(true)}
        >
          <MaterialIcons name="logout" size={24} color="gray" />
          <Text style={{ marginLeft: 10, color: "gray", fontWeight: "500" }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    backgroundColor: "#E8907D",
    width: "100%",
    height: 300,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    padding: 40,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    padding: 20,
  },
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
