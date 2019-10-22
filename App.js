import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import HeaderTop from "./components/headerTop.js";
import HeaderMenu from "./components/headerMenu.js";
import Llamadas from "./components/llamadas.js";
import Estados from "./components/estados.js";

export default class app extends Component {
  state = { pagina: "llamadas" };

  cambia = destino => {
    this.setState({ pagina: destino });
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

        {this.state.pagina == "llamadas" ? <Llamadas></Llamadas> : null}
        {this.state.pagina == "estados" ? <Estados></Estados> : null}
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
