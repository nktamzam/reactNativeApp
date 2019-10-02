import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class CallsHeaders extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.top}>
            <View style={{ flex: 2, padding: 3 }}>
              <Text style={style.wpp}>WathsApp</Text>
            </View>
            <View style={style.botonSearch}>
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../assets/search.png")}
              />
            </View>
            <View style={style.botonMenu}>
              <Image
                style={{ width: 35, height: 40 }}
                source={require("../assets/menu.png")}
              />
            </View>
          </View>
          <View style={style.menu}>
            <Text style={style.font}>CHATS</Text>

            <Text style={style.font}>ESTADOS</Text>

            <Text style={style.font}>LLAMADAS</Text>
          </View>
        </View>
        <View style={style.content}>
          <View style={style.item}></View>
          <View style={style.item}></View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontFamily: "sans-serif"
  },
  header: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#ef0b7c",
    paddingTop: 40
  },
  top: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  menu: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  content: {
    width: "100%",
    flex: 5
  },
  wpp: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    padding: 5
  },
  botonSearch: { width: 45 },
  botonMenu: { width: 45 },
  font: { color: "#fff", fontSize: 16 }
});
