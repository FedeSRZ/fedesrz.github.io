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
var Router_1 = require("../Router");
var styles = react_native_1.StyleSheet.create({
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
var Comics = /** @class */ (function (_super) {
    __extends(Comics, _super);
    function Comics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comics.prototype.render = function () {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.View, { style: styles.content },
                React.createElement(react_native_1.Text, { style: styles.titulo }, "COMICS"),
                React.createElement(react_native_1.View, { style: styles.comicsList },
                    React.createElement(react_native_1.View, { style: styles.comicBox },
                        React.createElement(Router_1.Link, { to: "/comics/game-over-1", style: { width: "100%", height: "100%" } },
                            React.createElement(react_native_1.Image, { source: require("../../images/comic-game-over.jpeg"), style: { width: "100%", height: "100%" }, resizeMode: "contain" })),
                        React.createElement(react_native_1.Text, { style: styles.comicBoxTitle }, "Game Over 1")),
                    React.createElement(react_native_1.View, { style: styles.comicBox },
                        React.createElement(Router_1.Link, { to: "/comics/game-over-1", style: { width: "100%", height: "100%" } },
                            React.createElement(react_native_1.Image, { source: require("../../images/comic-game-over.jpeg"), style: { width: "100%", height: "100%" }, resizeMode: "contain" })),
                        React.createElement(react_native_1.Text, { style: styles.comicBoxTitle }, "Game Over 2")),
                    React.createElement(react_native_1.View, { style: styles.comicBox },
                        React.createElement(Router_1.Link, { to: "/comics/game-over-1", style: { width: "100%", height: "100%" } },
                            React.createElement(react_native_1.Image, { source: require("../../images/comic-game-over.jpeg"), style: { width: "100%", height: "100%" }, resizeMode: "contain" })),
                        React.createElement(react_native_1.Text, { style: styles.comicBoxTitle }, "Game Over 3"))))));
    };
    return Comics;
}(React.PureComponent));
exports.Comics = Comics;
