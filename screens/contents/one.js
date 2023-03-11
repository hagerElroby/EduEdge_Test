// import React from 'react'
// import {Text, View } from "react-native";

// const one = () => {
//   return (
//     <View>
//       <Text>one</Text>
//     </View>
//   )
// }

// export default one
// import React from 'react'
// import {Text, View } from "react-native";

// const Introduction = () => {
//   return (
//     <View>
//       <Text>Introduction</Text>
//     </View>
//   )
// }

// export default Introduction


import { disableErrorHandling } from 'expo';
import React from 'react';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar ,View } from 'react-native';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';
import * as data from '../../data.json';
export default function one() {
  const _editor = React.createRef();

    useEffect(() => {
            _editor.current?.enable(false)
    }, [])

  return (
  
    <SafeAreaView style={styles.root}  >
      <StatusBar style="auto" />
      <QuillEditor
        style={styles.editor}
        ref={_editor}
        initialHtml={data.contents[4].text.ar } />
      <QuillToolbar editor={_editor} options="full" theme="light"/>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#eaeaea',
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: 'white',
  },
});

