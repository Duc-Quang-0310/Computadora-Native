import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeRouter, Route, Switch, Redirect } from "react-router-native";
import { route } from "./common/configs/routes/routeName";
import routes from "./common/configs/routes/routes";
import { useHistory } from "react-router";

export default function Application() {
  const history = useHistory();
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                exact={route.exact}
                component={route.component}
                key={index}
                path={route.path}
              />
            );
          })}
        </Switch>
        <Redirect to={route.LOADING} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
