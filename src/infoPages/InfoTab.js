import React, { Component } from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Info from './Info';
import Verify from './VerifyStack/Verify';
import Policy from './Policy';
import Message from './MessageStack/index';
import MessDetail from './MessageStack/MessDetail';
import Settings from './SettingStack/index';
import Language from './SettingStack/Language';
import IDConfirm from './VerifyStack/IDConfirm';

const InfoStack = createStackNavigator()

const InfoScreen = { Info }
const VerifyScreen = { Verify, Policy, IDConfirm }
const MessScreen = { Message, MessDetail }
const SettingScreen = { Settings, Language }

const InfoTab = ()=>{
    return(
        <InfoStack.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0,
            },
            ...TransitionPresets.SlideFromRightIOS
        }}>
            {Object.entries({
                ...InfoScreen,
                ...VerifyScreen,
                ...MessScreen,
                ...SettingScreen
            }).map(([name, component], index) => {
                return(
                    <InfoStack.Screen
                    key={index}
                    name={name}
                    component={component}
                    options={{title: ""}} />
                )
            })}
            
        </InfoStack.Navigator>
    )
}

export default InfoTab