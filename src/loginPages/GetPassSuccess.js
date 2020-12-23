import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View } from 'react-native'
import globalStyles from '../../styles'
import CustomButton from '../components/CustomButton';

const GetPassSuccess = () => {
    const navigation = useNavigation()
    return (
        <View style={globalStyles.container}>
            <View style={{ width: "100%" }}>
                <Image
                width={46}
                height={46}
                source={require("../../assets/img/Check_Circle.png")}
                style={{alignSelf: "center"}}
                />
                <Text style={{textAlign: "center", fontWeight: "bold", marginVertical: 30}}>
                    Password reset successful
                </Text>
                <Text style={{textAlign: "center", color: "#acacac"}}>You have successfully reset your password. Please use your new password when logging in.</Text>
                <CustomButton
                onHandlePress={()=>navigation.navigate("Signup")}
                active={true}
                text="Login" />
            </View>
        </View>
    )
}

export default GetPassSuccess