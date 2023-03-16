import React, { useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import MainHeader from "../components/MainHeader";
import MainList from "../components/MainList";
import axios from "axios";

export default function MainScreen() {
  useEffect(() => {
    axios.get("sandbox.interswitchng.com/api/v2/quickteller/billers",{
      headers: {
        Authorization: 'InterswitchAuth ' + Buffer.from("<CLIENT_ID>").toString('base64'),
            'Content-Type': 'application/json',
            'Signature': "<COMPUTED_SIGNATURE>",//check authentication section
            'Timestamp': "<CURRENT_TIMESTAMP>",
            'Nonce': "<COMPUTED_NONCE>", //check authentication section
            'TerminalID': "<TERMINAL_ID>",
            'SignatureMethod': 'SHA1'
      }
    })
  },[])
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#EAD9EB",
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <MainHeader />
      </View>
      <View style={{ width: "100%", height: 600 }}>
        <MainList />
      </View>
    </View>
  );
}
