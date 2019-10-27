"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_material_ui_1 = require("react-native-material-ui");
var Routes_1 = require("./Routes");
var uiTheme_1 = require("./uiTheme");
exports.App = function () {
    return (react_1.default.createElement(react_native_material_ui_1.ThemeContext.Provider, { value: react_native_material_ui_1.getTheme(uiTheme_1.uiTheme) },
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.wrapper },
                react_1.default.createElement(Routes_1.Routes, null)))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    wrapper: {
        flex: 1,
        backgroundColor: react_native_material_ui_1.COLOR.white,
        width: "100%"
        //maxWidth: 425
    }
});
