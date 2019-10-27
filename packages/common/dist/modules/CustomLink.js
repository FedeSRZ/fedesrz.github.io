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
var index_1 = require("../Router/index");
var styles = react_native_1.StyleSheet.create({
    menuItem: {
        color: "white",
        fontSize: 18,
        padding: 10
    },
    menuItemSelected: {
        fontWeight: "bold"
    }
});
exports.CustomLink = function (_a) {
    var children = _a.children, to = _a.to, activeOnlyWhenExact = _a.activeOnlyWhenExact;
    return (React.createElement(index_1.Route, { path: to, exact: activeOnlyWhenExact, children: function (_a) {
            var match = _a.match;
            return (React.createElement(index_1.Link, { style: { textDecorationLine: "none" }, to: to },
                React.createElement(react_native_1.Text, { style: {
                        color: "white",
                        fontSize: 18,
                        padding: 10,
                        textDecorationLine: "none",
                        fontWeight: match ? "bold" : "normal"
                    } }, children)));
        } }));
};
