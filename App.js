import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import home from './screens/Home';
import contents from './screens/Contents';
import glossary from './screens/glossary';
import Bookmarks from "./screens/bookmarks";
import ObjectLibrary from "./screens/objectLibrary";
import AppNavigation from "./AppNavigation";
const Drawer = createDrawerNavigator();


export default function App() {

  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Biology" component={home} />
    //     <Drawer.Screen name="Contents" component={contents} />
    //     <Drawer.Screen name="Glossary" component={glossary} />
    //     <Drawer.Screen name="Bookmarks" component={Bookmarks} />
    //     <Drawer.Screen name="ObjectLibrary" component={ObjectLibrary} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

     
       <AppNavigation/>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
   
//   },
// });







