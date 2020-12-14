import React from 'react'
import { StyleSheet, View } from 'react-native';

const DemoFlexbox = ()=>{
    return(
        <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.topLeft}>
          <View style={{backgroundColor: "yellow", flex: 4}}/>
          <View style={{flex: 6}}/>
        </View>

        <View style={styles.topRight}/>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}/>
        <View style={styles.bottomMiddle}/>
        <View style={styles.bottomRight}>
          <View style={{backgroundColor: "green", flex: 1}}/>
          <View style={{backgroundColor: "black", flex: 1}}/>
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flexDirection: "column"
    },
    top: {
      flex: 7,
      flexDirection: "row"
    },
    topLeft: {
      backgroundColor: "white",
      flexDirection: "column",
      flex: 3
    },
    topRight: {
      backgroundColor: "red",
      flex: 7
    },
    bottom: {
      flex: 3,
      flexDirection: "row"
    },
    bottomLeft: {
      backgroundColor: "blue",
      flex: 3
    },
    bottomMiddle: {
      backgroundColor: "white",
      flex: 5
    },
    bottomRight: {
      flex: 2,
      flexDirection: "column"
    }
  })

export default DemoFlexbox