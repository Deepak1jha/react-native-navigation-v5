import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from "../../screens/login/Login";
import SignUp from "../../screens/signUp/SignUp";

const Tab = createBottomTabNavigator();

const DashboardNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Login" component={Login}/>
    <Tab.Screen name="SignUp" component={SignUp}/>
  </Tab.Navigator>
)
export default DashboardNavigator;
