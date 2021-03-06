import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../../styles';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const NewPass = () => {

    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigation = useNavigation();
    
    const checkPass = ()=>{
        return pass.length > 7 && pass === confirm
    }

    return (
        <View style={globalStyles.container}>
            <View style={{ width: "100%" }}>
                <Text style={globalStyles.title}>Enter your new password</Text>

                <TextInput
                    style={[globalStyles.input, pass.length < 8 && pass.length > 0 && styles.wrong]}
                    placeholder="New password"
                    secureTextEntry={true}
                    onChangeText={(pass) => setPass(pass)}
                    value={pass}/>

                {
                    pass.length > 0 && pass.length < 8 &&
                    <Text style={styles.mess}>Password must be at least 8 characters, uppercase letters and numbers</Text>
                }

                <TextInput
                    style={[globalStyles.input, pass !== confirm && styles.wrong]}
                    placeholder="Confirm pasword"
                    value={confirm}
                    onChangeText={(pass)=>setConfirm(pass)}
                    secureTextEntry={true} />

                {
                    pass !== confirm &&
                    <Text style={styles.mess}>Password does not match</Text>
                }

                <CustomButton active={checkPass()} text="Confirm" onHandlePress={()=>navigation.navigate("GetPassSuccess")} />
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
    wrong: {
        borderColor: "#eb5757"
    },
    mess: {
        fontSize: 12,
        color: "#eb5757",
        marginVertical: 5
    }
})

export default NewPass