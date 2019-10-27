import firebase from "firebase";
import * as React from "react";
export declare class Login extends React.PureComponent {
    state: {
        passwordVisible: boolean;
        email: string;
        password: string;
    };
    logInWithCredential(credential: firebase.auth.OAuthCredential): Promise<void>;
    render(): JSX.Element;
}
