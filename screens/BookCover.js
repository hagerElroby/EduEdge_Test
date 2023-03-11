// import React from 'react'
// import {Text, View } from "react-native";

// const BookCover = () => {
//   return (
//     <View>
//       <Text>BookCover</Text>
//     </View>
//   )
// }

// export default BookCover

import React from 'react';
import { StyleSheet, View, Text , Image } from 'react-native';
import * as data from '../data.json'
const word = data.title;
const  BookCover =()=> {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{word}</Text>
                <Image style={styles.img} source={require('../images/bio-2.jpg')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
       fontWeight:'bold',
       fontSize:18
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    box:{
        width:'93%',
        height:'85%',
        // borderWidth:1,
        // borderColor:'#673ab7',
        alignItems: "center",
        justifyContent: "center"

    },
    img:{
        width:'95%',
        height:'95%' ,
        resizeMode: 'stretch'
    
    }
  });

  export default  BookCover
