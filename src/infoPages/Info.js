import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { features } from './features'
import CustomButton from '../components/CustomButton';
import { useState } from 'react/cjs/react.development';
import { useNavigation } from '@react-navigation/native';
import { AuthContext, UserContext, LocaleContext } from '../common/context';

export const handlePhoneNumber = (phone, showPhone) => {
  let str = ''
  let index = phone.length - 2
  for (let i = 0; i < index; i++) {
    str += '*'
  }
  return phone.substring(0, 2) + (showPhone ? phone.substring(2).substring(0, phone.substring(2).length - 2) : str) + phone.substring(index)
}

const header = (translate, user, showPhone, setShowPhone, navigation) => {
  return (
    <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
      <Text style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 20 }}>
        {translate.account}
      </Text>
      <View style={{ flexDirection: "row" }}>

        <View style={{ alignItems: "center", flexDirection: "row", flexGrow: 1 }}>
          <Image source={require('../../assets/img/avt.png')} />
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ marginRight: 15 }}>
                {handlePhoneNumber(user.phone, showPhone)}
              </Text>
              <TouchableWithoutFeedback
                style={{width: 20, height: 20, justifyContent: "center", alignItems: "center"}}
                onPress={() => setShowPhone(!showPhone)}
                >
                <Image width={20} height={20} source={require('../../assets/img/eye_off.png')} />
              </TouchableWithoutFeedback>
            </View>
            <Text style={{ color: "#828282" }}>ID: {user.ID}</Text>
          </View>
        </View>

        <View style={{ transform: ([{ translateX: 30 }]) }}>
          <TouchableOpacity
            style={styles.verifyBtn}
            onPress={() => navigation.navigate("Verify")}>
            <Text style={{ marginRight: 10, fontWeight: '400' }}>
              {translate.Verify}
            </Text>
            <Image source={require('../../assets/img/icon/black_arrow.png')} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const renderItem = (navigation, translate) => {
  return features.map((item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => navigation.navigate(item.name)}>
        <View style={{ flexDirection: "row", paddingVertical: 20 }}>
          <View style={{ marginRight: 24 }} width={20}>
            <Image source={item.icon}  />
          </View>
          <Text style={{ flexGrow: 1, fontSize: 14, fontWeight: '400' }}>
            {translate[item.name]}
          </Text>
          <Image source={require("../../assets/img/icon/right_arrow.png")} />
        </View>
        <View style={{ width: "100%", height: 0.5, backgroundColor: "#E0E0E0" }}></View>
      </TouchableOpacity>
    )
  })
}

const mapFeatures = (navigation, translate) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      {renderItem(navigation, translate)}
    </View>
  )
}

export const border = () => {
  return (
    <View
      style={{ width: "100%", height: 5, backgroundColor: "#EFF0F4" }}>
    </View>
  )
}

// main
const Info = () => {

  const authContext = useContext(AuthContext)
  const user = useContext(UserContext).user
  const [showPhone, setShowPhone] = useState(false)
  const navigation = useNavigation()

  const translate = useContext(LocaleContext).localeValue.info

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ width: "100%" }}>
        {header(translate, user, showPhone, setShowPhone, navigation)}
        {border()}
        {mapFeatures(navigation, translate)}
        {border()}
        <View style={{ padding: 20 }}>
          <CustomButton active={true} text={translate.log_out} onHandlePress={
            ()=>authContext.setAuth(false)
          } />
          <Text
          style={{ marginTop: 12, fontSize: 12, lineHeight: 20, color: "#828282" }}>
            Please do not disclose your SMS verification code to anyone, including Zerotech's customer support
          </Text>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white"
  },
  verifyBtn: {
    backgroundColor: "#FAD939",
    borderRadius: 20,

    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: "center"
  }
})

export default Info