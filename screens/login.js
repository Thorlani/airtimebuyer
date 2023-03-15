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

const LoginSchema = Yup.object().shape({
  phonenumber: Yup.string()
    .min(11, "Phone number must be 11 digit!")
    .max(11, "Phone number must be 11 digit!")
    .required("Please enter your phone number"),
  password: Yup.string()
    .min(8, "Password cannot be below 8 char")
    .required("Please enter your password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/,
      "Wrong password"
    ),
});

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
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
            Ready to buy an airtime?
          </Text>
        </View>
        <Formik
          initialValues={{
            phonenumber: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={() => {
            navigation.navigate("Home");
          }}
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
                  style={styles.input}
                  placeholder="Phone number"
                  value={values.phonenumber}
                  onChangeText={handleChange("phonenumber")}
                  onBlur={() => setFieldTouched("phonenumber")}
                  component={TextInput}
                  keyboardType="numeric"
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
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={isValid ? styles.btn : styles.notBtn}
              >
                <Text style={styles.btnText}>Log In</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
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
