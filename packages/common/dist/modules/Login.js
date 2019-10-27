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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = __importDefault(require("firebase"));
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_fbsdk_1 = require("react-native-fbsdk");
var react_native_material_ui_1 = require("react-native-material-ui");
var MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var firebase_2 = __importDefault(require("../firebase/firebase"));
var GoogleSignIn_1 = require("../GoogleSignIn");
var TextField_1 = require("../ui/TextField");
if (react_native_1.Platform.OS !== "web") {
    GoogleSignIn_1.GoogleSignin.configure({
        webClientId: "241131382173-vn5gfac8nsoku95al8920166jhg1sn87.apps.googleusercontent.com"
    });
}
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            passwordVisible: false,
            email: "",
            password: ""
        };
        return _this;
    }
    Login.prototype.logInWithCredential = function (credential) {
        return __awaiter(this, void 0, void 0, function () {
            var userCredential;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase_2.default
                            .auth()
                            .signInWithCredential(credential)
                            .catch(function (error) { return console.log(error); })];
                    case 1:
                        userCredential = _a.sent();
                        console.log(userCredential);
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_native_1.View, { style: {
                padding: 15,
                flex: 1,
                justifyContent: "space-between"
                //paddingTop: 200
            } },
            React.createElement(react_native_1.View, null),
            React.createElement(react_native_1.KeyboardAvoidingView, { behavior: "padding", keyboardVerticalOffset: 115, style: { justifyContent: "center" } },
                React.createElement(TextField_1.TextField, { containerStyle: { marginLeft: 39, marginRight: 39 }, label: "Email", value: this.state.email, onChangeText: function (text) { return _this.setState({ email: text }); } }),
                React.createElement(react_native_1.View, { style: {
                        marginTop: 25,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "flex-end"
                    } },
                    React.createElement(TextField_1.TextField, { containerStyle: { flex: 1, marginLeft: 39, marginRight: 15 }, label: "Password", value: this.state.password, secureTextEntry: !this.state.passwordVisible, onChangeText: function (text) { return _this.setState({ password: text }); } }),
                    React.createElement(react_native_1.TouchableOpacity, { style: { width: 24, marginBottom: 15 }, onPress: function () {
                            _this.setState({ passwordVisible: !_this.state.passwordVisible });
                        } },
                        React.createElement(MaterialCommunityIcons_1.default, { name: this.state.passwordVisible ? "eye" : "eye-off", size: 24 }))),
                React.createElement(react_native_material_ui_1.Button, { raised: true, primary: true, style: {
                        container: {
                            marginTop: 75,
                            marginHorizontal: 39
                        }
                    }, text: "Ingresar", onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                        var userCredential;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, firebase_2.default
                                        .auth()
                                        .signInWithEmailAndPassword(this.state.email, this.state.password)
                                        .catch(function (error) { return console.log(error); })
                                        .then(function (response) { return console.log(response); })];
                                case 1:
                                    userCredential = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); } })),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_material_ui_1.Button, { style: {
                        container: {
                            //marginTop: 100,
                            marginHorizontal: 39,
                            justifyContent: "flex-start"
                        },
                        text: { flex: 1, textAlign: "center" }
                    }, raised: true, icon: React.createElement(react_native_1.Image, { source: require("../../images/google-icon.png"), style: { width: 20, height: 20 } }), text: "Continuar con Google", onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                        var userInfo, credential, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(react_native_1.Platform.OS === "web")) return [3 /*break*/, 1];
                                    firebase_2.default
                                        .auth()
                                        .signInWithPopup(new firebase_1.default.auth.GoogleAuthProvider())
                                        .catch(function (error) { return console.log(error); });
                                    return [3 /*break*/, 6];
                                case 1:
                                    _a.trys.push([1, 5, , 6]);
                                    return [4 /*yield*/, GoogleSignIn_1.GoogleSignin.hasPlayServices()];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, GoogleSignIn_1.GoogleSignin.signIn()];
                                case 3:
                                    userInfo = _a.sent();
                                    console.log(userInfo);
                                    return [4 /*yield*/, firebase_1.default.auth.GoogleAuthProvider.credential(userInfo.idToken)];
                                case 4:
                                    credential = _a.sent();
                                    console.log(credential);
                                    this.logInWithCredential(credential);
                                    return [3 /*break*/, 6];
                                case 5:
                                    error_1 = _a.sent();
                                    console.log(error_1);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); } }),
                React.createElement(react_native_material_ui_1.Button, { style: {
                        container: {
                            marginTop: 10,
                            marginBottom: 25,
                            marginHorizontal: 39,
                            justifyContent: "flex-start",
                            backgroundColor: "#4e71a8",
                            paddingLeft: 10
                        },
                        text: {
                            color: "white",
                            flex: 1,
                            textAlign: "center"
                        }
                    }, raised: true, icon: React.createElement(react_native_1.Image, { source: require("../../images/facebook-icon.png"), style: { width: 32, height: 32 } }), text: "Continuar con Facebook", onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                        var provider, userCredential;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(react_native_1.Platform.OS === "web")) return [3 /*break*/, 2];
                                    provider = new firebase_1.default.auth.FacebookAuthProvider();
                                    provider.addScope("public_profile");
                                    provider.addScope("email");
                                    return [4 /*yield*/, firebase_2.default
                                            .auth()
                                            .signInWithPopup(provider)
                                            .catch(function (error) { return console.log(error); })];
                                case 1:
                                    userCredential = _a.sent();
                                    if (userCredential) {
                                        console.log(userCredential);
                                    }
                                    return [3 /*break*/, 3];
                                case 2:
                                    react_native_fbsdk_1.LoginManager.logInWithPermissions([
                                        "public_profile",
                                        // "user_friends",
                                        "email"
                                    ]).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                        var data, credential;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, react_native_fbsdk_1.AccessToken.getCurrentAccessToken()];
                                                case 1:
                                                    data = _a.sent();
                                                    if (!data) return [3 /*break*/, 3];
                                                    return [4 /*yield*/, firebase_1.default.auth.FacebookAuthProvider.credential(data.accessToken)];
                                                case 2:
                                                    credential = _a.sent();
                                                    this.logInWithCredential(credential);
                                                    _a.label = 3;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); } }))));
    };
    return Login;
}(React.PureComponent));
exports.Login = Login;
