import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignupTab from './loginPages/SignupTab';
import InfoTab from './infoPages/InfoTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import MarketTab from './marketTab/index';
import { AuthContext } from './common/context';

const Tab = createBottomTabNavigator()

const App = () => {
  const {isAuth} = useContext(AuthContext)
  return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let icon
                switch (route.name) {
                  case "Home":
                    icon = "home-outline"
                    break;
                  case "Market":
                    icon = "stats-chart-outline"
                    break;
                  case "Trade":
                    icon = "pie-chart-outline"
                    break;
                  case "Wallet":
                    icon = "wallet-outline"
                    break;
                }
                return <Icon name={icon} size={size} color={color} />
              },
              tabBarVisible: isAuth
            })}
            tabBarOptions={{
              activeTintColor: "#FAD939",
              inactiveTintColor: "#828282",
            }}
          >
            <Tab.Screen
              name="Home"
              component={isAuth ? InfoTab : SignupTab}
            />

            <Tab.Screen
              name="Market"
              component={MarketTab}
            />

          </Tab.Navigator>
        </NavigationContainer>
  )
}

export default App;