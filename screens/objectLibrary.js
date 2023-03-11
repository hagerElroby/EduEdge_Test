import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ObjectLibrary() {
    return (
        <View style={styles.container}>
            <Text>Object Library Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });