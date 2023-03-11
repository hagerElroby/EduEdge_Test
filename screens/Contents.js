// import React from 'react';
// import { StyleSheet, View, Text , Image } from 'react-native';
// import * as data from '../data.json';
// const word = data.title;
// const Contents =()=> {
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

//   export default  Contents








  // import { disableErrorHandling } from 'expo';
  // import React from 'react';
  // import { useEffect } from 'react';
  // import { SafeAreaView, StyleSheet, StatusBar ,View } from 'react-native';
  // import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';
  // import * as data from '../contents.json';
  // const Contents =()=>  {
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
  //         initialHtml={data.text} />
  //       <QuillToolbar editor={_editor} options="full" theme="light"/>
  //     </SafeAreaView>
    
  //   );
  // }
  // export default Contents
  
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
  
  
  import { StatusBar } from "expo-status-bar";
  import { Button, StyleSheet, Text, TextInput, View } from "react-native";
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  import one from './contents/one'
  import two from './contents/two'
  import three from './contents/three'
  import Introduction from './contents/Introduction'
  
  const Drawer = createDrawerNavigator();
  
  
  export default function Contents() {
  
    return (
      <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="Introduction"> 
          <Drawer.Screen name="Introduction" component={Introduction} />
          <Drawer.Screen name="Why respiration ?" component={one} />
          <Drawer.Screen name="cellular respiration" component={two} />
          <Drawer.Screen name="Respiration in human" component={three} />
         
        </Drawer.Navigator>
      </NavigationContainer>
  
  
  
    );
  }
  
  
  













// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import * as data from '../contents.json';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import ObjectLibrary from './objectLibrary';

// import Glossary from './glossary';


// const Drawer = createDrawerNavigator();

// export default function Contents() {
//     return (
      
    //      <View style={styles.container}>
    //      <View style={styles.box}>
    //      <Text style={styles.title}>Introduction</Text>
    //        <Text>{data.name}</Text>
    //         <Text>{data.text}</Text>
    //      </View>
    //  </View>

//     <Drawer.Navigator>
//       <Drawer.Screen name="Profile" component={ObjectLibrary} />
//       <Drawer.Screen name="Settings" component={Glossary} />
//     </Drawer.Navigator>
//     )
// }


// const styles = StyleSheet.create({
   
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

//     }
//   });