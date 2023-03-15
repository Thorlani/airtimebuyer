import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Authenticate from "../redux/AuthAction";

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

export default function SigninScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <ScrollView>
          <View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/welcome.png")}
                style={{
                  width: "60%",
                  height: 200,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: "#8C52FF",
                marginBottom: 15,
              }}
            >
              Want to buy airtime with ease? Register now
            </Text>
          </View>
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
            onSubmit={() => navigation.navigate("Home")}
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
                      color: "#EAD9EB",
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
                      color: "#EAD9EB",
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
                      color: "#EAD9EB",
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
                      color: "#EAD9EB",
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
                      color: "#EAD9EB",
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
                      color: "#EAD9EB",
                      marginBottom: 20,
                      marginTop: -5,
                    }}
                  >
                    {errors.confirmPassword}
                  </Text>
                )}
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={isValid ? styles.btn : styles.notBtn}
                >
                  <Text style={styles.btnText}>Sign Up</Text>
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
    backgroundColor: "#BD84D8",
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
    borderColor: "#EAD9EB",
    borderRadius: 10,
    borderWidth: 1,
    padding: 8,
  },
  btn: {
    backgroundColor: "#8C52FF",
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
    color: "#FD7F32",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
