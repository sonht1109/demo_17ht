import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Signup from './Signup';
import ForgotPass from './ForgotPass';
import VerifyNumber from './VerifyNumber';
import NewPass from './NewPass';
import GetPassSuccess from './GetPassSuccess';

const SignupStack = createStackNavigator();

const stack = {Signup, ForgotPass, VerifyNumber, NewPass, GetPassSuccess}
const hideHeaderStack = ["Signup", "GetPassSuccess"]

const SignupTab = ()=>{
    return(
        <SignupStack.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0
            },
            ...TransitionPresets.SlideFromRightIOS
        }}>
            {Object.entries(stack).map(([name, component], index)=> {
                return(
                    <SignupStack.Screen
                    key={index}
                    name={name}
                    component={component}
                    options={{
                        title: "",
                        headerShown: !hideHeaderStack.includes(name)
                    }}
                    />
                )
            })}
        </SignupStack.Navigator>
    )
}

export default SignupTab;