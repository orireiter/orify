/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import Login from "./components/Login";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        translucent={true}
        backgroundColor={"hsla(275, 86%, 42%, 0.3)"}
      />
      <NavigationContainer>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
          <Login />
        </ScrollView>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
