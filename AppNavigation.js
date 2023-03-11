import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Splash from './screens/Splash'
import Main from './screens/Main'
import Home from "./screens/Home";

const Drawer = createDrawerNavigator();
const AppNavigation = ()=> {

  return (

//     <View><Text>Nav</Text></View>
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Drawer.Screen name="Main" component={Main} options={{headerShown:false}} />
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
};
export default AppNavigation;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });







