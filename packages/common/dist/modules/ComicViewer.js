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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var styles = react_native_1.StyleSheet.create({
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
var ComicViewer = /** @class */ (function (_super) {
    __extends(ComicViewer, _super);
    function ComicViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            paginaActual: 1,
            totalPaginas: 4
        };
        _this.paginaAnterior = function () {
            var paginaActual = _this.state.paginaActual;
            if (paginaActual > 1) {
                paginaActual--;
            }
            _this.setState({ paginaActual: paginaActual });
        };
        _this.paginaSiguiente = function () {
            var paginaActual = _this.state.paginaActual;
            var totalPaginas = _this.state.totalPaginas;
            if (paginaActual < totalPaginas) {
                paginaActual++;
            }
            _this.setState({ paginaActual: paginaActual });
        };
        return _this;
    }
    ComicViewer.prototype.render = function () {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.View, { style: styles.content },
                React.createElement(react_native_1.Text, { style: styles.titulo }, this.props.match.params.id),
                React.createElement(react_native_1.View, { style: styles.pageViewer },
                    React.createElement(react_native_1.TouchableOpacity, { onPress: this.paginaAnterior },
                        React.createElement(MaterialCommunityIcons_1.default, { name: "arrow-left", size: 48 })),
                    React.createElement(react_native_1.Image, { source: require("../../images/comic-" +
                            this.props.match.params.id +
                            "-" +
                            this.state.paginaActual.toString().padStart(4, "0") +
                            ".png"), style: { width: "100%", height: "100%" }, resizeMode: "contain" }),
                    React.createElement(react_native_1.TouchableOpacity, { onPress: this.paginaSiguiente },
                        React.createElement(MaterialCommunityIcons_1.default, { name: "arrow-right", size: 48 }))))));
    };
    return ComicViewer;
}(React.PureComponent));
exports.ComicViewer = ComicViewer;
