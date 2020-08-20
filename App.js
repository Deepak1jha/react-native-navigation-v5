import React from 'react';
import {StyleSheet} from 'react-native';
import Dashboard from "./screens/dashboard/dashboard";

export default function App() {
  return (
    <Dashboard/>
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
