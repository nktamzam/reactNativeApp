import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ItemCall from "./itemCall.js";

export default class Llamadas extends Component {
  render() {
    return (
      <ScrollView>
        <ItemCall
          nombre="Pepe Pig"
          fecha="22-Mar-2019 5:32 Pm"
          src={require("../assets/foto1.png")}
          modo={require("../assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Pakita Rodrigo "
          fecha="17-Mar-2019 3:57 Am"
          src={require("../assets/foto2.png")}
          modo={require("../assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Miren Etxeondo"
          fecha="25-Mar-2019 2:35 Pm"
          src={require("../assets/foto3.png")}
          modo={require("../assets/video.png")}
        ></ItemCall>
        <ItemCall
          nombre="Mikel Retegui"
          fecha="21-Feb-2019 9:32 Pm"
          src={require("../assets/foto4.png")}
          modo={require("../assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Elbira zipitria"
          fecha="12-Ene-2019 1:12 Am"
          src={require("../assets/foto5.png")}
          modo={require("../assets/video.png")}
        ></ItemCall>
        <ItemCall
          nombre="Carlos Santamaria"
          src={require("../assets/foto6.png")}
          modo={require("../assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Pepe Pig"
          fecha="22-Mar-2019 5:32 Pm"
          src={require("../assets/foto1.png")}
          modo={require("../assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Pakita Rodrigo "
          fecha="17-Mar-2019 3:57 Am"
          src={require("../assets/foto2.png")}
          modo={require("../assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Miren Etxeondo"
          fecha="25-Mar-2019 2:35 Pm"
          src={require("../assets/foto3.png")}
          modo={require("../assets/video.png")}
        ></ItemCall>
        <ItemCall
          nombre="Mikel Retegui"
          fecha="21-Feb-2019 9:32 Pm"
          src={require("../assets/foto4.png")}
          modo={require("../assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Elbira zipitria"
          fecha="12-Ene-2019 1:12 Am"
          src={require("../assets/foto5.png")}
          modo={require("../assets/video.png")}
        ></ItemCall>
        <ItemCall
          nombre="Carlos Santamaria"
          src={require("../assets/foto6.png")}
          modo={require("../assets/telefono.png")}
        ></ItemCall>
      </ScrollView>
    );
  }
}
