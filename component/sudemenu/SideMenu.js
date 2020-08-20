import React from 'react';
import {Avatar, Button, Text} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from "../../config/colors";
import {MaterialIcons} from '@expo/vector-icons';
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";

export default function SideMenu({navigation}) {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View>
            <Avatar.Image size={50} source={require('../../assets/deepak.png')}/>
          </View>
          <View>
            <Text style={styles.text}>
              Deepak kumar jha
            </Text>
            <View style={styles.emailText}>
              <Text>ddjha171@gmail.com</Text>
            </View>

          </View>
        </View>
      </View>
      <DrawerSection title={"Profile"}>
        <DrawerItem
          label={"Home"}
          onPress={() => navigation.navigate("Dashboard")}
          icon={() => (<MaterialIcons name="home" size={24} color="black"/>)}
        />
        <DrawerItem
          label={"Profile"}
          onPress={() => navigation.navigate("SignUp")}
          icon={() => (<MaterialIcons name="account-circle" size={24} color="black"/>)}
        />
        <DrawerItem
          label={"Settings"}
          onPress={() => navigation.navigate("SignUp")}
          icon={() => (<MaterialIcons name="settings" size={24} color="black"/>)}
        />
      </DrawerSection>
      <DrawerSection title={"Action"} style={{borderRadius: 25}}>
        <TouchableOpacity style={styles.container}>
          <View>
            <View>
              <Button icon="logout">
                Logout
              </Button>
            </View>
          </View>

        </TouchableOpacity>
      </DrawerSection>
    </DrawerContentScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 15,
    // bordarColor:"black"
    // radiusBorder:
    // margin: 20
  },
  profile: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    margin: 20,
    flexDirection: "row"
  },
  text: {
    fontWeight: "bold",
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  emailText: {
    fontWeight: "bold",
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  logout_text: {
    fontWeight: "bold"
  }
});
