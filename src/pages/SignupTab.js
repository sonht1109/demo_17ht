import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Signup';
import ForgotPass from './ForgotPass';
import VerifyNumber from './VerifyNumber';
import NewPass from './NewPass';

const SignupStack = createStackNavigator();

const SignupTab = ()=>{
    return(
        <SignupStack.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0
            }
        }}>
            <SignupStack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
            />

            <SignupStack.Screen
            name="Forgot password"
            component={ForgotPass}
            options={{
                title: "",
            }}
            />

            <SignupStack.Screen 
            name="Verify number"
            component={VerifyNumber}
            options={{
                title: ""
            }}
            />

            <SignupStack.Screen 
            name="New pass"
            component={NewPass}
            options={{
                title: ""
            }}
            />
        </SignupStack.Navigator>
    )
}

export default SignupTab;