"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var uiTheme_1 = require("../uiTheme");
var CustomLink_1 = require("./CustomLink");
var styles = react_native_1.StyleSheet.create({
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
        backgroundColor: uiTheme_1.uiTheme.palette.primaryColor,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});
exports.Header = function () {
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.Text, { style: styles.titulogo }, "My Comic App LOGO"),
        React.createElement(react_native_1.View, { style: styles.menuBar },
            React.createElement(CustomLink_1.CustomLink, { to: "/inicio", activeOnlyWhenExact: true }, "Inicio"),
            React.createElement(CustomLink_1.CustomLink, { to: "/comics", activeOnlyWhenExact: true }, "Comics"))));
};
