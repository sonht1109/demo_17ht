import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Info from './Info';
import Verify from './Verify';
import Policy from './Policy';
import Message from './MessageStack/index';
import MessDetail from './MessageStack/MessDetail';
import Settings from './SettingStack/index';
import Language from './SettingStack/Language';

const InfoStack = createStackNavigator()

const InfoTab = ()=>{
    return(
        <InfoStack.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0,
            },
            ...TransitionPresets.SlideFromRightIOS
        }}>
            <InfoStack.Screen name="Info" component={Info} options={{title: ""}}/>
            <InfoStack.Screen name="Verify" component={Verify} options={{title: ""}}/>
            <InfoStack.Screen name="Policy" component={Policy} options={{title: ""}}/>
            <InfoStack.Screen name="Message" component={Message} options={{title:""}} />
            <InfoStack.Screen name="Mess Detail" component={MessDetail} options={{title: ""}} />
            <InfoStack.Screen name="Settings" component={Settings} options={{title: ""}} />
            <InfoStack.Screen name="Language" component={Language} options={{title: ""}} />
            
        </InfoStack.Navigator>
    )
}

export default InfoTab