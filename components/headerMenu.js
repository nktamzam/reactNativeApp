import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HeaderMenu extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.font}>CHATS</Text>

        <Text style={style.font}>ESTADOS</Text>

        <Text style={style.font}>LLAMADAS</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingBottom: 20
  },
  font: { color: "#fff", fontSize: 16 }
});
