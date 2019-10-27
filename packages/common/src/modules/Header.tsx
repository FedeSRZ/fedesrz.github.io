import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { uiTheme } from "../uiTheme";
import { CustomLink } from "./CustomLink";

const styles = StyleSheet.create({
  container: {
    //height: 100,
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column"
  },
  titulogo: {
    fontSize: 42,
    margin: 20
  },
  menuBar: {
    backgroundColor: uiTheme.palette.primaryColor,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulogo}>My Comic App LOGO</Text>
      <View style={styles.menuBar}>
        <CustomLink to="/inicio" activeOnlyWhenExact={true}>
          Inicio
        </CustomLink>
        <CustomLink to="/comics" activeOnlyWhenExact={true}>
          Comics
        </CustomLink>
      </View>
    </View>
  );
};
