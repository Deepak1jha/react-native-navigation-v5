import * as React from 'react';
import SignUp from "../../screens/signUp/SignUp";
import Dashboard from "../../screens/dashboard/dashboard";
import {createDrawerNavigator,} from '@react-navigation/drawer';
import SideMenu from "../../component/sudemenu/SideMenu";
import colors from "../../config/colors";
import DashboardNavigator from "../DashboardNavigator/dashboardNavigator";

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <SideMenu {...props}/>}
    drawerContentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: {marginVertical: 10},
      activeBackgroundColor: colors.primary,
      inactiveTintColor: colors.primary
    }}
    overlayColor="transparent">
    <Drawer.Screen name="Dashboard" component={DashboardNavigator}/>
    <Drawer.Screen name="SignUp" component={SignUp}/>
  </Drawer.Navigator>
);

export default AppNavigator;
