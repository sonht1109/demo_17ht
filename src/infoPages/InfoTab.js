import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Info from './Info';
import Verify from './Verify';
import Policy from './Policy';
import Message from './MessageStack/index';

const InfoStack = createStackNavigator()

const InfoTab = ()=>{
    return(
        <InfoStack.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0,
            },
        }}>
            <InfoStack.Screen name="Info" component={Info} options={{title: ""}}/>
            <InfoStack.Screen name="Verify" component={Verify} options={{title: ""}}/>
            <InfoStack.Screen name="Policy" component={Policy} options={{title: ""}}/>
            <InfoStack.Screen name="Message" component={Message} options={{title:""}} />
            
        </InfoStack.Navigator>
    )
}

export default InfoTab