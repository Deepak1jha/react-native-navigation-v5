import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from "./navigation/app/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    // <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
