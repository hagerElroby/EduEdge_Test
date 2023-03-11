import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Bookmarks from "./bookmarks";
import ObjectLibrary from "./objectLibrary";
import Glossary from "./glossary";
import Contents from "./Contents";
import CustomDrawer from "../components/CustomDrawer";
import BookCover from './BookCover'
const Drawer = createDrawerNavigator();


export default function Home() {

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="BookCover" 
       drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Biology" component={BookCover} />
        <Drawer.Screen name="Contents" component={Contents} options={{headerShown:false}}/>
        <Drawer.Screen name="Glossary" component={Glossary} />
        <Drawer.Screen name="Bookmarks" component={Bookmarks} />
        <Drawer.Screen name="ObjectLibrary" component={ObjectLibrary} />
      </Drawer.Navigator>
    </NavigationContainer>



  );
}













{/* <Stack.Screen name="Home" component={HomeScreen} options={{animationTypeForReplace: "pop"}} /> */}

// import React from 'react';
// import { StyleSheet, View, Text , Image } from 'react-native';
// import * as data from '../data.json';
// const word = data.title;
// const Home =()=> {
//     return (
//         <View style={styles.container}>
//             <View style={styles.box}>
//                 <Text style={styles.title}>{word}</Text>
//                 <Image style={styles.img} source={require('../images/bio-2.jpg')}/>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     title:{
//        fontWeight:'bold',
//        fontSize:18
//     },
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     box:{
//         width:'93%',
//         height:'85%',
//         borderWidth:1,
//         borderColor:'#673ab7',
//         alignItems: "center",
//         justifyContent: "center"

//     },
//     img:{
//         width:'95%',
//         height:'95%' ,
//         resizeMode: 'stretch'
    
//     }
//   });

//   export default  Home



  
// import { disableErrorHandling } from 'expo';
// import React from 'react';
// import { useEffect } from 'react';
// import { SafeAreaView, StyleSheet, StatusBar ,View } from 'react-native';
// import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';
// import * as data from './contents.json';
// export default function App() {
//   const _editor = React.createRef();

//     useEffect(() => {
//             _editor.current?.enable(false)
//     }, [])

//   return (
  
//     <SafeAreaView style={styles.root}  >
//       <StatusBar style="auto" />
//       <QuillEditor
//         style={styles.editor}
//         ref={_editor}
//         initialHtml={data.text}  />
//       <QuillToolbar editor={_editor} options="full" theme="light"/>
//     </SafeAreaView>
  
//   );
// }

// const styles = StyleSheet.create({
//   title: {
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     paddingVertical: 10,
//   },
//   root: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: '#eaeaea',
//   },
//   editor: {
//     flex: 1,
//     padding: 0,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginHorizontal: 30,
//     marginVertical: 5,
//     backgroundColor: 'white',
//   },
// });

