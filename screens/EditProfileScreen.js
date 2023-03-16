import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { Field, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Firstname is too short")
    .max(50, "Firstname is too long!")
    .required("Please enter your firstname"),
  lastName: Yup.string()
    .min(2, "Lastname is too short!")
    .max(50, "Lastname is too long!")
    .required("Please enter your lastname"),
  phonenumber: Yup.string()
    .min(11, "Phone number must be 11 digit!")
    .max(11, "Phone number must be 11 digit!")
    .required("Please enter your phone number"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password cannot be below 8 characters")
    .required("Please enter your password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/,
      "Must contain minimum of 8 characters, at least one Uppercase, at least one lowercase contain, a number and include a special character"
    ),
  confirmPassword: Yup.string()
    .min(8, "Password cannot be below 8 characters")
    .oneOf([Yup.ref("password")], "Your password does not match")
    .required("Please confirm your password"),
});

export default function EditProfileScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
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
                Successful
              </Text>
              <Text style={{ marginBottom: 25, color: "#fff" }}>
                Your profile details have been successfully updated.
              </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#fff",
                  borderRadius: 10
                }}
                onPress={() => navigation.goBack()}
              >
                <Text style={{ color: "gray" }}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          top: -60,
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text
            style={{
              color: "#E8907D",
              fontSize: 18,
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            Edit Profile
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={{ paddingRight: 15 }}
        >
          <Feather name="x" size={24} color="#E8907D" />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <ScrollView>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phonenumber: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={() => setModalVisible(true)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldTouched,
              handleSubmit,
              isValid,
            }) => (
              <View>
                <View style={styles.inputWrapper}>
                  <Field
                    name="firstName"
                    style={styles.input}
                    placeholder="FirstName"
                    onChangeText={handleChange("firstName")}
                    value={values.firstName}
                    component={TextInput}
                    onBlur={() => setFieldTouched("firstName")}
                  />
                </View>
                {touched.firstName && errors.firstName && (
                  <Text
                    style={{
                      color: "#E8907D",
                      marginBottom: 20,
                      marginTop: -5,
                    }}
                  >
                    {errors.firstName}
                  </Text>
                )}
                <View style={styles.inputWrapper}>
                  <Field
                    name="lastName"
                    style={styles.input}
                    placeholder="Lastname"
                    onChangeText={handleChange("lastName")}
                    value={values.lastName}
                    component={TextInput}
                    onBlur={() => setFieldTouched("lastName")}
                  />
                </View>
                {touched.lastName && errors.lastName && (
                  <Text
                    style={{
                      color: "#E8907D",
                      marginBottom: 20,
                      marginTop: -5,
                    }}
                  >
                    {errors.lastName}
                  </Text>
                )}
                <View style={styles.inputWrapper}>
                  <Field
                    name="phonenumber"
                    style={styles.input}
                    placeholder="Phone number"
                    onChangeText={handleChange("phonenumber")}
                    keyboardType="numeric"
                    value={values.phonenumber}
                    component={TextInput}
                    onBlur={() => setFieldTouched("phonenumber")}
                  />
                </View>
                {touched.phonenumber && errors.phonenumber && (
                  <Text
                    style={{
                      color: "#E8907D",
                      marginBottom: 20,
                      marginTop: -5,
                    }}
                  >
                    {errors.phonenumber}
                  </Text>
                )}
                <View style={styles.inputWrapper}>
                  <Field
                    name="email"
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    component={TextInput}
                    onBlur={() => setFieldTouched("email")}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text
                    style={{
                      color: "#E8907D",
                      marginBottom: 20,
                      marginTop: -5,
                    }}
                  >
                    {errors.email}
                  </Text>
                )}
                <View style={styles.inputWrapper}>
                  <Field
                    name="password"
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    component={TextInput}
                    onBlur={() => setFieldTouched("password")}
                  />
                </View>
                {touched.password && errors.password && (
                  <Text
                    style={{
                      color: "#E8907D",
                      marginBottom: 20,
                      marginTop: -5,
                    }}
                  >
                    {errors.password}
                  </Text>
                )}
                <View style={styles.inputWrapper}>
                  <Field
                    name="confirmPassword"
                    style={styles.input}
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    onChangeText={handleChange("confirmPassword")}
                    value={values.confirmPassword}
                    component={TextInput}
                    onBlur={() => setFieldTouched("confirmPassword")}
                  />
                </View>
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text
                    style={{
                      color: "#E8907D",
                      marginBottom: 20,
                      marginTop: -5,
                    }}
                  >
                    {errors.confirmPassword}
                  </Text>
                )}
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  // disabled={!isValid}
                  // style={isValid ? styles.btn : styles.notBtn}
                  style={styles.btn}
                >
                  <Text style={styles.btnText}>Update</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAD9EB",
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
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  btn: {
    backgroundColor: "#E8907D",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
  },
  notBtn: {
    backgroundColor: "grey",
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
  alertContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  alertTitle: {
    color: "red",
    fontSize: 24,
  },
  alertMessage: {
    color: "green",
    fontSize: 18,
  },
  alertButton: {
    backgroundColor: "blue",
    padding: 10,
  },
  alertText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
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
