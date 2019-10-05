import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ItemCall from "./itemCall.js";

export default class Estados extends Component {
  render() {
    return (
      <View style={style.container}>
        <ItemCall
          nombre="Miren Etxeondo"
          fecha="25-Mar-2019 2:35 Pm"
          src={require("../assets/foto3.png")}
        ></ItemCall>
        <ItemCall
          nombre="Mikel Retegui"
          fecha="21-Feb-2019 9:32 Pm"
          src={require("../assets/foto4.png")}
        ></ItemCall>
        <ItemCall
          nombre="Elbira zipitria"
          fecha="12-Ene-2019 1:12 Am"
          src={require("../assets/foto5.png")}
        ></ItemCall>
        <ItemCall
          nombre="Carlos Santamaria"
          src={require("../assets/foto6.png")}
        ></ItemCall>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {}
});
