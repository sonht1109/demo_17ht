import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Market from './Market';
import EditFollowList from './followListStack/EditFollowList';

const MarketStack = createStackNavigator()

const MarketTab = ()=>{
    return(
        <NavigationContainer>
            <MarketStack.Navigator>

                <MarketStack.Screen
                name="Market"
                component={Market} />

                <MarketStack.Screen
                name="EditFollowList"
                component={EditFollowList} />

            </MarketStack.Navigator>
        </NavigationContainer>
    )
}

export default MarketTab