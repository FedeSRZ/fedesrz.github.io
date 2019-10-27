import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { COLOR, getTheme, ThemeContext } from "react-native-material-ui";
import { Routes } from "./Routes";
import { uiTheme } from "./uiTheme";

export const App = () => {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          <Routes />
        </SafeAreaView>
      </View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLOR.white, //"#F5FCFF",
    width: "100%"
    //maxWidth: 425
  }
});
