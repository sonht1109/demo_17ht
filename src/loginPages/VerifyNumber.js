import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import globalStyles from '../../styles';
import { useRoute, useNavigation } from '@react-navigation/native';

const VerifyNumber = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const [code, setCode] = useState('')
  const [index, setIndex] = useState(0);

  const verifyInput = () => {
    return (
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginVertical: 40 }}>
        {mapInput()}
      </View>
    )
  }

  const focus = (val)=> {
    // console.log(val);
    setIndex(val)
  }

  const mapInput = () => {
    var res = [];
    for (var i = 0; i < 6; i++) {
      res.push(
        <TextInput
        key={i}
        style={[styles.verifyItem, index === i && styles.verifyItemActive]}
        onFocus={()=>focus(i)}
        />
      )
    }
    return res;
  }

  return (
    <View style={globalStyles.container}>
      <View style={{ width: "100%" }}>
        <Text style={globalStyles.title}>Verify number</Text>
        <Text style={{ fontSize: 14, color: "#acacac" }}>We will send you a code to verify your phone number</Text>
        <Text>Send <Text style={{ color: "#FAD939" }}>{route.params.phone}</Text></Text>
        {verifyInput()}
        <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ flex: 0.5, textAlign: "center", color: "#FAD939", fontWeight: "bold" }}>
            Resend OTP
                    </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }} onPress={()=>navigation.navigate("New pass")}>Next</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{ color: "#acacac", fontSize: 14, marginTop: 60, fontWeight: '500' }}
          onPress={() => navigation.navigate("Signup")}>
          Back to Sign up/Log in
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  verifyItem: {
    width: 45,
    height: 45,
    borderColor: "#dfdfdf",
    borderWidth: 1,
    margin: 5,
    textAlign: "center"
  },
  verifyItemActive: {
    borderColor: "#F2C94C"
  },
  button: {
    marginLeft: "auto",
    backgroundColor: "#d1d1d1",
    paddingVertical: 15,
    flex: 0.5
  }
})

export default VerifyNumber