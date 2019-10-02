import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import CallsHeaders from "./components/callsHeader.js";
import ItemCall from "./components/itemCall.js";

export default class calls extends Component {
  render() {
    return (
      <View style={style.container}>
        <CallsHeaders></CallsHeaders>
        <ItemCall></ItemCall>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});
