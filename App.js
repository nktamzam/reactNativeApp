import React, { Component } from "react";
import { StyleSheet, Text, Alert, View, Button, Picker } from "react-native";

export default class test extends Component {
  state = {
    lana: 25,
    atsedena: 5
  };
  render() {
    return (
      <View style={css.container}>
        <View style={css.lerroan}>
          <View style={css.select}>
            <Picker
              selectedValue={this.state.lana}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  lana: itemValue
                })
              }
            >
              <Picker.Item label="5" value="10" />
              <Picker.Item label="10" value="15" />
              <Picker.Item label="15" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="30" value="20" />
            </Picker>{" "}
            <Text> Lana </Text>{" "}
          </View>{" "}
          <View style={css.select}>
            <Picker
              selectedValue={this.state.atsedena}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  atsedena: itemValue
                })
              }
            >
              <Picker.Item label="5" value="10" />
              <Picker.Item label="10" value="15" />
              <Picker.Item label="15" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="30" value="20" />
            </Picker>{" "}
            <Text> Atsedena </Text>{" "}
          </View>{" "}
        </View>{" "}
        <Text style={css.denbora}> 15: 25 </Text>{" "}
        <View style={css.botoia}>
          <Button
            title="Hasi lanean"
            onPress={() => Alert.alert(this.state.lana)}
          />{" "}
        </View>{" "}
      </View>
    );
  }
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef0b7c",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    fontFamily: "sans-serif"
  },
  denbora: {
    margin: 20,
    fontSize: 110,
    fontFamily: "sans-serif-thin",
    color: "white",
    flex: 4
  },
  botoia: {
    fontSize: 55,
    width: "80%",
    flex: 2
  },
  lerroan: {
    flexDirection: "row"
  },
  select: {
    flex: 1,
    padding: 5,
    fontSize: 50,
    backgroundColor: "#ac5e85",
    borderRadius: 5,
    margin: "10%",
    justifyContent: "center"
  }
});
