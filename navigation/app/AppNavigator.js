import * as React from 'react';
import SignUp from "../../screens/signUp/SignUp";
import Dashboard from "../../screens/dashboard/dashboard";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList,} from '@react-navigation/drawer';
import SideMenu from "../../component/sudemenu/SideMenu";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}


const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <SideMenu {...props}/>}
    drawerContentOptions={{
      activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 10 },
      activeBackgroundColor:"gery",
      inactiveTintColor:"green"
    }}
    openByDefault
    overlayColor="transparent">
    <Drawer.Screen name="Dashboard" component={Dashboard}/>
    <Drawer.Screen name="SignUp" component={SignUp}/>
  </Drawer.Navigator>
);

export default AppNavigator;
