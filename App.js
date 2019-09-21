import React from "react";
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

state = { mezua: "kaixo" };

export default function App() {
  return (
    <View style={css.container}>
      <Text style={css.margina}>Kaixo Adei!!!</Text>

      <Button title="Alerta ireki" onPress={() => Alert.alert(state.mezua)} />

      <TextInput
        placeholder="Idazti zerbait hemen"
        onChange={() => this.setState({ mezua: "beste bar" })}
        style={{
          height: 40,
          width: 300,
          borderColor: "#274441",
          borderWidth: 1,
          margin: 30
        }}
      />

      <ActivityIndicator style={css.margina} size="large" color="#666" />

      <Picker style={{ height: 50, width: 100 }}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="hlola" value="ss" />
      </Picker>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  },
  margina: {
    margin: 20
  }
});
