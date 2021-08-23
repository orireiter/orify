/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import Login from "./components/Login";
import { useAuth } from "./contexts/authContext";

// todo init a new app for reference as to how make dark vs light mode

function PlaceHolder() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dashboard Dashboard Dashboard</Text>
      <Text>Dashboard Dashboard Dashboard</Text>
      <Text>Dashboard Dashboard Dashboard</Text>
      <Text>Dashboard Dashboard Dashboard</Text>
      <Text>Dashboard Dashboard Dashboard</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  const { userData } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData == null ? (
          <Stack.Screen name="SignIn" component={Login} />
        ) : (
          <Stack.Screen name="Home" component={PlaceHolder} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
