import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import globalStyles from '../../styles';
import { useRoute, useNavigation } from '@react-navigation/native';

const VerifyNumber = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const [code, setCode] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: ''
  })
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)


  const verifyInput = () => {
    return (
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginVertical: 40 }}>
        <TextInput
        ref={ref1}
        autoFocus={true}
        style={[styles.verifyItem]}
        maxLength={1}
        
        keyboardType="numeric"
        value={code.code1}
        onChangeText={(text)=>{
          if(text.length > 0){
            ref2.current.focus()
          }
          setCode({...code, code1: text})
        }}
        />
        <TextInput
        style={[styles.verifyItem]}
        ref={ref2}
        maxLength={1}
        keyboardType="numeric"
        value={code.code2}
        onChangeText={(text)=>{
          if(text.length > 0){
            ref3.current.focus()
          }
          else{
            ref1.current.focus()
          }
          setCode({...code, code2: text})
        }}
        />
        <TextInput
        style={[styles.verifyItem]}
        ref={ref3}
        maxLength={1}
        keyboardType="numeric"
        value={code.code3}
        onChangeText={(text)=>{
          if(text.length > 0){
            ref4.current.focus()
          }
          else{
            ref2.current.focus()
          }
          setCode({...code, code3: text})
        }}
        />
        <TextInput
        style={[styles.verifyItem]}
        ref={ref4}
        maxLength={1}
        keyboardType="numeric"
        value={code.code4}
        onChangeText={(text)=>{
          if(text.length > 0){
            ref5.current.focus()
          }
          else{
            ref3.current.focus()
          }
          setCode({...code, code4: text})
        }}
        />
        <TextInput
        style={[styles.verifyItem]}
        maxLength={1}
        ref={ref5}
        keyboardType="numeric"
        value={code.code5}
        onChangeText={(text)=>{
          if(text.length > 0){
            ref6.current.focus()
          }
          else{
            ref4.current.focus()
          }
          setCode({...code, code5: text})
        }}
        />
        <TextInput
        style={[styles.verifyItem]}
        maxLength={1}
        ref={ref6}
        keyboardType="numeric"
        value={code.code6}
        onChangeText={(text)=>{
          if(text.length > 0){
            ref6.current.focus()
          }
          else{
            ref5.current.focus()
          }
          setCode({...code, code6: text})
        }}
        />
      </View>
    )
  }

  return (
    <View style={globalStyles.container}>
      <View style={{ width: "100%" }}>
        <Text style={globalStyles.title}>Verify number</Text>
        <Text style={{ fontSize: 14, color: "#acacac" }}>We will send you a code to verify your phone number</Text>
        <Text>Send to <Text style={{ color: "#FAD939" }}>{route.params.phone}</Text></Text>
        {verifyInput()}
        <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ flex: 0.5, textAlign: "center", color: "#FAD939", fontWeight: "bold" }}>
            Resend OTP
                    </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }} onPress={()=>navigation.navigate("NewPass")}>Next</Text>
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