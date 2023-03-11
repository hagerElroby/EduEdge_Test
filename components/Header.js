import React from 'react'
import { View  ,Text , StyleSheet} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header(){
  return (
    <View  style={styles.header}>
      <View style={styles.left}>
     
      <Text style={styles.title}>EduEdges</Text>
      </View>
      <View style={styles.menu}>
      <MaterialIcons name='menu' size={20} color='#fff'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
      header:{
            height:80,
            paddingTop:38,
            backgroundColor:'#673ab7',
                // paddingTop :40,
                // paddingHorizontal:20,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection:'row',
                padding:10
      },
      left:{
        flexDirection:'row',
        alignItems: 'center',
                justifyContent: 'center',
      },
     
      title:{
            textAlign:'center',
            color:'#fff',
            fontSize:25,
            fontWeight:'bold',
            marginLeft:5
      }
})