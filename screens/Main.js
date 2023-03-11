// import React from 'react'
// import {View , Text , StyleSheet} from 'react-native'
// import Header from '../components/Header'
// const Main = () => {
//   return (
//    <View>
//      <Header/>
//      <View style={styles.container}>
//       <Text>Main</Text>
//     </View>
//    </View>
//   )
// }

// export default Main


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#333",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


import React from 'react'
import { StyleSheet, Text, View , Button ,ScrollView , TextInput ,
         FlatList , TouchableOpacity ,Image, TouchableWithoutFeedback , Keyboard , Pressable} 
from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import {MaterialIcons} from '@expo/vector-icons'
import Home from './Home';

export default function Main() {
  const navigation = useNavigation();
  // pressHandler = ()=>{
  //   navigation.navigate('Splash');

  // }
  return (
    <View>
      <Header/>
      <View style={styles.div}>
      <View style={styles.main}>
      <MaterialIcons name='book' size={20} color='#4c2c85'/>
      <Text style={styles.text}>My Books Shelf</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.item} >
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Home')
        }}>
        <Image style={styles.img} source={require('../images/bio-2.jpg')}/>
        </TouchableOpacity>
        </View>
        <View style={styles.item}>
        <Image style={styles.img}  source={require('../images/bio-2.jpg')}/>
        </View>
        <View style={styles.item}>
        <Image style={styles.img}  source={require('../images/bio-2.jpg')}/>
        </View>
        <View style={styles.item}>
        <Image style={styles.img}  source={require('../images/bio-2.jpg')}/>
        </View>
      </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
      div:{
        
        height:'100%'
      },
      main:{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:'row', 
            paddingTop:20
      },
    text:{
     
            fontSize:25,
            fontWeight:'bold',
            marginLeft:5,
            color:'#4c2c85',
          
    },
    content:{
      flexDirection:'row',
      flexWrap:'wrap',
      width:'100%'
    } ,

 
    item:{
      
      width:'40%',
      marginLeft:25,
      marginBottom:10,
      marginTop:50,
      height:150,
      // borderStyle:'dotted',
      // borderWidth:3,
      borderRadius:10,
      // borderColor:'#673ab7'
      
     
    },
    img:{
      width:'99%',
      height:'99%',
      borderRadius:10,
      resizeMode: 'stretch'
    }
})