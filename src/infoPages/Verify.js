import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { border, handlePhoneNumber } from './Info';
import userInfo from '../useInfo';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title';

const boxContent = [
    {
        title: "Identity confirmation",
        subtitle: "Personal information",
        question: "Why do you need to verify your identity?",
        detail: [
            "Increase your withdrawal limit",
            "Increase the deposit limit for some fiat channels"
        ]
    },
    {
        title: "Additional Information",
        subtitle: "Residential address",
        question: "Why do you need to verify your residential address ?",
        detail: [
            "Increase your withdrawal limit",
            "Increase the deposit limit for some fiat channels"
        ]
    }
]

const verifyHeader = (showPhone, setShowPhone, navigation) => {
    return (
        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>

            <Title title="Information basic" style={{paddingHorizontal: 0}} />

            <TouchableOpacity style={styles.protect} onPress={()=> navigation.navigate("Policy")}>
                <Image width={10} height={10} source={require('../../assets/img/icon/security.png')} />
                <Text style={{ fontSize: 12, color: "#828282", marginHorizontal: 10 }}> Personal information protection </Text>
                <Image source={require('../../assets/img/icon/right_arrow.png')} />
            </TouchableOpacity>

            <View style={{ flexDirection: "row" }}>

                <View style={{ alignItems: "center", flexDirection: "row", flexGrow: 1 }}>
                    <Image source={require('../../assets/img/avt.png')} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ marginRight: 15 }}>
                                {handlePhoneNumber(userInfo.phone, showPhone)}
                            </Text>
                            <TouchableWithoutFeedback
                                onPress={() => setShowPhone(!showPhone)}>
                                <Image source={require('../../assets/img/eye_off.png')} />
                            </TouchableWithoutFeedback>
                        </View>
                        <Text style={{ color: "#828282" }}>ID: {userInfo.ID}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const verifyBox = (title, subtitle, question, detail, i) => {
    return (
        <View style={styles.box} key={i}>
            <Text style={{fontWeight: '700'}}>{title}</Text>
            <View style={{ height: 1, backgroundColor: "#bdbdbd", marginVertical: 10 }}/>
            <View>
                <View style={{ flexDirection: "row", marginBottom: 15 }}>
                    <Image source={require('../../assets/img/protect_info.png')}/>
                    <Text style={{fontWeight: "500", marginLeft: 10}}>{subtitle}</Text>
                </View>

                <Text style={{ fontSize: 12, color: "#828282", fontWeight: "500", lineHeight: 14, marginBottom: 5 }}>
                    {question}
                </Text>

                {detail.map((d, index) => {
                    return <Text key={index} style={{ fontSize: 12, color: "#acacac" }}>- {d}</Text>
                })}

                <CustomButton active={true} text="Verify" />

            </View>
        </View>
    )
}

const Verify = () => {
    const [showPhone, setShowPhone] = useState(false)
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.container}>
            {verifyHeader(showPhone, setShowPhone, navigation)}
            {border()}
            <View style={{padding: 20}}>
                {boxContent.map((c, i)=>{
                    return verifyBox(c.title, c.subtitle, c.question, c.detail, i)
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
    },
    protect: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        borderColor: "#F2C94C",
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 20,
        alignSelf: "flex-start"
    },
    box: {
        padding: 20,
        backgroundColor: "#f8f8f8"
    }
})

export default Verify