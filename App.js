import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import HeaderTop from "./components/headerTop.js";
import HeaderMenu from "./components/headerMenu.js";
import ItemCall from "./components/itemCall.js";

export default class app extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <HeaderTop></HeaderTop>
          <HeaderMenu></HeaderMenu>
        </View>
        <ItemCall
          nombre="Pepe Pig"
          src={require("./assets/foto1.png")}
          modo={require("./assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Pakita Rodrigo "
          src={require("./assets/foto2.png")}
          modo={require("./assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Miren Etxeondo"
          src={require("./assets/foto3.png")}
          modo={require("./assets/video.png")}
        ></ItemCall>
        <ItemCall
          nombre="Mikel Rtegui"
          src={require("./assets/foto4.png")}
          modo={require("./assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Elbira zipitria"
          src={require("./assets/foto5.png")}
          modo={require("./assets/video.png")}
        ></ItemCall>
        <ItemCall
          nombre="Carlos Santamaria"
          src={require("./assets/foto6.png")}
          modo={require("./assets/telefono.png")}
        ></ItemCall>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {},
  header: {
    height: 150,
    backgroundColor: "#ef0b7c",
    justifyContent: "space-between"
  }
});
