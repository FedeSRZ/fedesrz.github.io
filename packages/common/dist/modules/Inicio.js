"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Login_1 = require("./Login");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center"
        alignItems: "center"
        //height: "100%"
    },
    login: {
        maxWidth: 400,
        height: "100%"
    }
});
var Inicio = /** @class */ (function (_super) {
    __extends(Inicio, _super);
    function Inicio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inicio.prototype.render = function () {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.View, { style: styles.login },
                React.createElement(Login_1.Login, null))));
    };
    return Inicio;
}(React.PureComponent));
exports.Inicio = Inicio;
