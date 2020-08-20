import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../../screens/login/Login";
import SignUp from "../../screens/signUp/SignUp";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="LogIn" component={Login}/>
    <Stack.Screen name="Register" component={SignUp}/>
  </Stack.Navigator>
);

export default AuthNavigator;
