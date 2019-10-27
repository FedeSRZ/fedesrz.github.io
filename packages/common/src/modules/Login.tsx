import firebase from "firebase";
import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View
} from "react-native";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import { Button } from "react-native-material-ui";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import firebaseRef from "../firebase/firebase";
import { GoogleSignin } from "../GoogleSignIn";
import { TextField } from "../ui/TextField";

if (Platform.OS !== "web") {
  GoogleSignin.configure({
    webClientId:
      "241131382173-vn5gfac8nsoku95al8920166jhg1sn87.apps.googleusercontent.com"
  });
}

export class Login extends React.PureComponent {
  state = {
    passwordVisible: false,
    email: "",
    password: ""
  };

  async logInWithCredential(credential: firebase.auth.OAuthCredential) {
    const userCredential = await firebaseRef
      .auth()
      .signInWithCredential(credential)
      .catch(error => console.log(error));
    console.log(userCredential);
  }

  render() {
    return (
      <View
        style={{
          padding: 15,
          flex: 1,
          justifyContent: "space-between"
          //paddingTop: 200
        }}
      >
        <View>
          {/* <Text style={{ marginTop: 10, fontSize: 36, textAlign: "center" }}>
            My Comic App
          </Text> */}
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={115}
          style={{ justifyContent: "center" }}
        >
          <TextField
            containerStyle={{ marginLeft: 39, marginRight: 39 }}
            label="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <View
            style={{
              marginTop: 25,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <TextField
              containerStyle={{ flex: 1, marginLeft: 39, marginRight: 15 }}
              label="Password"
              value={this.state.password}
              secureTextEntry={!this.state.passwordVisible}
              onChangeText={text => this.setState({ password: text })}
            />
            <TouchableOpacity
              style={{ width: 24, marginBottom: 15 }}
              onPress={() => {
                this.setState({ passwordVisible: !this.state.passwordVisible });
              }}
            >
              <Icon
                name={this.state.passwordVisible ? "eye" : "eye-off"}
                size={24}
              />
            </TouchableOpacity>
          </View>
          <Button
            raised
            primary
            style={{
              container: {
                marginTop: 75,
                marginHorizontal: 39
              }
            }}
            text="Ingresar"
            onPress={async () => {
              const userCredential = await firebaseRef
                .auth()
                .signInWithEmailAndPassword(
                  this.state.email,
                  this.state.password
                )
                .catch(error => console.log(error))
                .then(response => console.log(response));
              // if (userCredential) {
              //   console.log(userCredential);
              // }
            }}
          />
        </KeyboardAvoidingView>
        <View>
          <Button
            style={{
              container: {
                //marginTop: 100,
                marginHorizontal: 39,
                justifyContent: "flex-start"
              },
              text: { flex: 1, textAlign: "center" }
            }}
            raised
            icon={
              <Image
                source={require("../../images/google-icon.png")}
                style={{ width: 20, height: 20 }}
              />
            }
            text="Continuar con Google"
            onPress={async () => {
              if (Platform.OS === "web") {
                firebaseRef
                  .auth()
                  .signInWithPopup(new firebase.auth.GoogleAuthProvider())
                  .catch(error => console.log(error));
              } else {
                try {
                  await GoogleSignin.hasPlayServices();
                  const userInfo = await GoogleSignin.signIn();
                  console.log(userInfo);
                  const credential = await firebase.auth.GoogleAuthProvider.credential(
                    userInfo.idToken
                  );
                  console.log(credential);
                  this.logInWithCredential(credential);
                } catch (error) {
                  console.log(error);
                }
              }
            }}
          />
          <Button
            style={{
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
            }}
            raised
            icon={
              <Image
                source={require("../../images/facebook-icon.png")}
                style={{ width: 32, height: 32 }}
              />
            }
            text="Continuar con Facebook"
            onPress={async () => {
              if (Platform.OS === "web") {
                const provider = new firebase.auth.FacebookAuthProvider();
                provider.addScope("public_profile");
                provider.addScope("email");
                const userCredential = await firebaseRef
                  .auth()
                  .signInWithPopup(provider)
                  .catch(error => console.log(error));
                if (userCredential) {
                  console.log(userCredential);
                }
              } else {
                LoginManager.logInWithPermissions([
                  "public_profile",
                  // "user_friends",
                  "email"
                ]).then(async () => {
                  const data = await AccessToken.getCurrentAccessToken();
                  if (data) {
                    const credential = await firebase.auth.FacebookAuthProvider.credential(
                      data.accessToken
                    );
                    this.logInWithCredential(credential);
                  }
                });
              }
            }}
          />
        </View>
      </View>
    );
  }
}
