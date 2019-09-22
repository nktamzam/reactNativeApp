import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
  Button,
  ActivityIndicator,
  Picker
} from "react-native";

export default class test extends Component {
  state = { mezua: "kaixo", hizkuntza: "Euskera" };
  render() {
    return (
      <View style={css.container}>
        <Text style={css.letra}>Kaixo Adei!!!</Text>

        <Button
          title="Alerta ireki"
          onPress={() => Alert.alert(this.state.mezua)}
        />

        <TextInput
          placeholder="Idatzi zerbait hemen"
          style={css.textusarrera}
          onChangeText={text => this.setState({ mezua: text })}
        />

        <ActivityIndicator style={css.margina} size="large" color="#666" />

        <Picker
          style={css.piker}
          selectedValue={this.state.hizkuntza}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ hizkuntza: itemValue, mezua: "Hello" })
          }
        >
          <Picker.Item label="Euskera" value="Euskera" />
          <Picker.Item label="Gaztelania" value="Gaztelania" />
          <Picker.Item label="Ingelesa" value="Ingelesa" />
        </Picker>
      </View>
    );
  }
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  },
  letra: {
    margin: 20,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold"
  },
  textusarrera: {
    height: 40,
    width: 350,
    borderColor: "#274441",
    borderWidth: 1,
    margin: 30,
    padding: 5
  },
  piker: { width: 300, height: 60, padding: 5, fontSize: 6 }
});
