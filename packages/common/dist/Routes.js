"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Comics_1 = require("./modules/Comics");
var ComicViewer_1 = require("./modules/ComicViewer");
var CurrentWorkout_1 = require("./modules/CurrentWorkout");
var Header_1 = require("./modules/Header");
var Inicio_1 = require("./modules/Inicio");
var Login_1 = require("./modules/Login");
var index_1 = require("./Router/index");
var styles = react_native_1.StyleSheet.create({
    container: {
        height: "100%"
    }
});
exports.Routes = function () {
    return (react_1.default.createElement(index_1.Router, null,
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_native_1.Platform.OS === "web" && react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(index_1.Switch, null,
                react_1.default.createElement(index_1.Route, { exact: true, path: "/", component: react_native_1.Platform.OS === "web" ? Inicio_1.Inicio : Login_1.Login }),
                react_1.default.createElement(index_1.Route, { exact: true, path: "/current-workout", component: CurrentWorkout_1.CurrentWorkout }),
                react_1.default.createElement(index_1.Route, { exact: true, path: "/inicio", component: Inicio_1.Inicio }),
                react_1.default.createElement(index_1.Route, { exact: true, path: "/comics", component: Comics_1.Comics }),
                react_1.default.createElement(index_1.Route, { exact: true, path: "/comics/:id", render: function (_a) {
                        var match = _a.match;
                        return react_1.default.createElement(ComicViewer_1.ComicViewer, { match: match });
                    } }),
                react_1.default.createElement(index_1.Route, { exact: true, path: "/workout/:year/:month/:day", component: CurrentWorkout_1.CurrentWorkout })))));
};
