import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import globalStyles from '../../styles';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
const ForgotPass = () => {

    const [text, setText] = useState('')
    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <View style={{width: "100%"}}>
                <Text style={globalStyles.title}>Forgot password</Text>
                <TextInput
                    onChangeText={(text) => setText(text)}
                    value={text}
                    placeholder="Phone"
                    style={globalStyles.input}
                    keyboardType="numeric"
                />
                <CustomButton
                text='Next'
                active={text!==""}
                onHandlePress={
                    ()=>navigation.navigate
                    ("VerifyNumber", {phone: text})
                } />
            </View>
        </View>
    )
}

export default ForgotPass