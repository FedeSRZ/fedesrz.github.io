import * as React from "react";
import {
  TextField as MaterialTextField,
  TextFieldProps
} from "react-native-material-textfield";
import { uiTheme } from "../uiTheme";

interface Props extends TextFieldProps {}

export const TextField: React.FC<Props> = props => {
  return (
    <MaterialTextField tintColor={uiTheme.palette.accentColor} {...props} />
  );
};
