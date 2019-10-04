import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import HeaderTop from "./components/headerTop.js";
import HeaderMenu from "./components/headerMenu.js";
import ItemCall from "./components/itemCall.js";

export default class app extends Component {
  state = { pagina: "llamadas" };
  cambia = destino => {
    this.setState({ pagina: destino });
    setTimeout(() => alert(this.state.pagina), 500);
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <HeaderTop></HeaderTop>
          <HeaderMenu
            cambiaaChats={() => {
              this.cambia("chats");
            }}
            cambiaaEstados={() => {
              this.cambia("estados");
            }}
            cambiaaLlamadas={() => {
              this.cambia("llamadas");
            }}
          ></HeaderMenu>
        </View>
        <ItemCall
          nombre="Pepe Pig"
          fecha="22-Mar-2019 5:32 Pm"
          src={require("./assets/foto1.png")}
          modo={require("./assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Pakita Rodrigo "
          fecha="17-Mar-2019 3:57 Am"
          src={require("./assets/foto2.png")}
          modo={require("./assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Miren Etxeondo"
          fecha="25-Mar-2019 2:35 Pm"
          src={require("./assets/foto3.png")}
          modo={require("./assets/video.png")}
        ></ItemCall>
        <ItemCall
          nombre="Mikel Rtegui"
          fecha="21-Feb-2019 9:32 Pm"
          src={require("./assets/foto4.png")}
          modo={require("./assets/telefono.png")}
        ></ItemCall>
        <ItemCall
          nombre="Elbira zipitria"
          fecha="12-Ene-2019 1:12 Am"
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
