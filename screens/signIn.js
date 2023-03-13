import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function SigninScreen({ navigation, route }) {
  const { page } = route.params;
  const [loginDetails, setLoginDetails] = useState({
    phoneNumber: "",
    passWord: "",
  });

  const [signupDetails, setSignupDetails] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    passWord: "",
  });

  return (
    <View style={styles.container}>
      {page === "login" && (
        <View style={styles.formContainer}>
          <View>
            <Text
              style={{
                textAlign: "center",
                color: "#000",
                fontSize: 24,
                fontWeight: "800",
              }}
            >
              Welcome,
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: "#000",
                marginBottom: 15,
              }}
            >
              Ready for to buy airtime?
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Phone number" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>
        </View>
      )}
      {page === "signup" && (
        <View style={styles.formContainer}>
          <Text
            style={{
              textAlign: "center",
              color: "#000",
              fontSize: 24,
              fontWeight: "800",
            }}
          >
            Welcome.
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
              color: "#000",
              marginBottom: 15,
            }}
          >
            Want to buy airtime with ease? Register now
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Firstname" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Lastname" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Phone number" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Email" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Confirm Password" />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  formContainer: {
    borderRadius: 20,
    padding: 20,
    width: "100%",
  },
  inputWrapper: {
    marginBottom: 15,
  },
  input: {
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
    padding: 8,
  },
  btn: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
