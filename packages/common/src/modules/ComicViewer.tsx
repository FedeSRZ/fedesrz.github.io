import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { match } from "react-router";

interface Props {
  match: match<{ id: string }>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  content: {
    width: "90%",
    height: "100%",
    padding: 10,
    alignItems: "center"
  },
  titulo: {
    marginTop: 10,
    fontSize: 32,
    textAlign: "center"
  },
  pageViewer: {
    flex: 1,
    marginTop: 10,
    width: "50%",
    //maxWidth: 600,
    minHeight: 1000,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export class ComicViewer extends React.PureComponent<Props> {
  state = {
    paginaActual: 1,
    totalPaginas: 4
  };

  paginaAnterior = () => {
    let paginaActual = this.state.paginaActual;

    if (paginaActual > 1) {
      paginaActual--;
    }

    this.setState({ paginaActual });
  };

  paginaSiguiente = () => {
    let paginaActual = this.state.paginaActual;
    const totalPaginas = this.state.totalPaginas;

    if (paginaActual < totalPaginas) {
      paginaActual++;
    }

    this.setState({ paginaActual });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>{this.props.match.params.id}</Text>
          <View style={styles.pageViewer}>
            <TouchableOpacity onPress={this.paginaAnterior}>
              <Icon name={"arrow-left"} size={48} />
            </TouchableOpacity>

            <Image
              source={require("../../images/comic-" +
                this.props.match.params.id +
                "-" +
                this.state.paginaActual.toString().padStart(4, "0") +
                ".png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={this.paginaSiguiente}>
              <Icon name={"arrow-right"} size={48} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
