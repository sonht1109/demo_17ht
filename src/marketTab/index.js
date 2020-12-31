import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Market from './Market';
import EditFollowList from './followListStack/EditFollowList';

const MarketStack = createStackNavigator()

const MarketTab = ()=>{
    return(
        <MarketStack.Navigator
        screenOptions={{
            ...TransitionPresets.SlideFromRightIOS
        }}
        >

            <MarketStack.Screen
            name="Market"
            component={Market}
            options={{
                headerShown: false
            }}/>

            <MarketStack.Screen
            name="EditFollowList"
            component={EditFollowList}
            options={{
                headerTitle: '',
                headerStyle: {
                    elevation: 0,
                },
                headerTintColor: "#bdbdbd",
            }}
            />

        </MarketStack.Navigator>
    )
}

export default MarketTab