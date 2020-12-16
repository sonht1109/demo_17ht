import React from 'react'
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignupTab from './src/pages/SignupTab';

const App = () => {
  return (  
      // <View style={styles.container}>
      //   <SignupTab />
      // </View>
      <NavigationContainer>
        <SignupTab/>
      </NavigationContainer>
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