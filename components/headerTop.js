import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class HeaderTop extends Component {
  render() {
    return (
      <View style={style.container}>
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
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 40
  },
  wpp: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    padding: 20
  },
  botonSearch: { width: 45 },
  botonMenu: { width: 45 }
});
