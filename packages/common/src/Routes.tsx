import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Comics } from "./modules/Comics";
import { ComicViewer } from "./modules/ComicViewer";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { Header } from "./modules/Header";
import { Inicio } from "./modules/Inicio";
import { Login } from "./modules/Login";
import { Route, Router, Switch } from "./Router/index";

const styles = StyleSheet.create({
  container: {
    height: "100%"
  }
});

export const Routes = () => {
  return (
    <Router>
      <View style={styles.container}>
        {Platform.OS === "web" && <Header></Header>}
        <Switch>
          <Route
            exact
            path="/"
            component={Platform.OS === "web" ? Inicio : Login}
          />
          <Route exact path="/current-workout" component={CurrentWorkout} />
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/comics" component={Comics} />
          <Route
            exact
            path="/comics/:id"
            render={({ match }) => <ComicViewer match={match}></ComicViewer>}
          />
          <Route
            exact
            path="/workout/:year/:month/:day"
            component={CurrentWorkout}
          />
        </Switch>
      </View>
    </Router>
  );
};
