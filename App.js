import React from 'react'
import Signup from './src/pages/Signup';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Signup />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 30,
    justifyContent: "center",
    alignItems: "center"
  }
})


export default App;