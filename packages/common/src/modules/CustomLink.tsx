import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Link, Route } from "../Router/index";

const styles = StyleSheet.create({
  menuItem: {
    color: "white",
    fontSize: 18,
    padding: 10
  },
  menuItemSelected: {
    fontWeight: "bold"
  }
});

interface Props {
  children: React.ReactNode;
  to: string;
  activeOnlyWhenExact: boolean;
}

export const CustomLink: React.FC<Props> = ({
  children,
  to,
  activeOnlyWhenExact
}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <Link style={{ textDecorationLine: "none" }} to={to}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              padding: 10,
              textDecorationLine: "none",
              fontWeight: match ? "bold" : "normal"
            }}
          >
            {children}
          </Text>
        </Link>
      )}
    />
  );
};
