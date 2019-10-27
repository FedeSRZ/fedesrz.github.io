import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "../Router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  content: {
    width: "90%",
    height: "100%",
    padding: 10
  },
  titulo: {
    marginTop: 10,
    fontSize: 32,
    textAlign: "center"
  },
  comicsList: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  comicBox: {
    minWidth: 300,
    height: 450,
    padding: 10,
    margin: 10
    //justifyContent: "space-around"
  },
  comicBoxTitle: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 10
  }
});

export class Comics extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>COMICS</Text>
          <View style={styles.comicsList}>
            <View style={styles.comicBox}>
              <Link
                to={"/comics/game-over-1"}
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  source={require("../../images/comic-game-over.jpeg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                ></Image>
              </Link>
              <Text style={styles.comicBoxTitle}>Game Over 1</Text>
            </View>
            <View style={styles.comicBox}>
              <Link
                to={"/comics/game-over-1"}
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  source={require("../../images/comic-game-over.jpeg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                ></Image>
              </Link>
              <Text style={styles.comicBoxTitle}>Game Over 2</Text>
            </View>
            <View style={styles.comicBox}>
              <Link
                to={"/comics/game-over-1"}
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  source={require("../../images/comic-game-over.jpeg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                ></Image>
              </Link>
              <Text style={styles.comicBoxTitle}>Game Over 3</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
