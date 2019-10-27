import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Login } from "./Login";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center"
    alignItems: "center"
    //height: "100%"
  },
  login: {
    maxWidth: 400,
    height: "100%"
  }
});

export class Inicio extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>HOLA MUNDO</Text> */}
        <View style={styles.login}>
          <Login />
        </View>
      </View>
    );
  }
}
