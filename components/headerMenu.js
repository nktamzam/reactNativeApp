import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default class HeaderMenu extends Component {
  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={this.props.cambiaaChats}
          underlayColor="white"
        >
          <Text style={style.font}>CHATS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.cambiaaEstados}
          underlayColor="white"
        >
          <Text style={style.font}>ESTADOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.cambiaaLlamadas}
          underlayColor="white"
        >
          <Text style={style.font}>LLAMADAS</Text>
        </TouchableOpacity>
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
