import { AppRegistry } from "react-native";
// Generate required css
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var iconFontMaterial = require("react-native-vector-icons/Fonts/MaterialIcons.ttf");
var iconFontMaterialCommunity = require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf");

const iconFontStyles =
  `@font-face {
  src: url(${iconFontMaterial});
  font-family: MaterialIcons;
}` +
  `@font-face {
  src: url(${iconFontMaterialCommunity});
  font-family: MaterialCommunityIcons;
}`;

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
// if (style.styleSheet) {
//   style.styleSheet.cssText = iconFontStyles;
// } else {
style.appendChild(document.createTextNode(iconFontStyles));
// }

// Inject stylesheet
document.head.appendChild(style);

// register the app
AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root")
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
