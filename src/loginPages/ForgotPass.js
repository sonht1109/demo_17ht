import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import globalStyles from '../../styles';
import { useNavigation } from '@react-navigation/native';
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
                <View>
                <TouchableOpacity
                style={globalStyles.button}
                onPress={()=>navigation.navigate
                    ("VerifyNumber", {phone: text})
                }
                >
                    <Text style={{textAlign: "center", fontWeight: "bold"}}>Next</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ForgotPass