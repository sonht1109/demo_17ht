import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignupTab from './src/loginPages/SignupTab';
import InfoTab from './src/infoPages/InfoTab';
import { createContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import MarketTab from './src/marketTab/index';

export const AuthContext = createContext()

const Tab = createBottomTabNavigator()

const App = () => {
  const [isAuth, setAuth] = useState(true)

  return (
    <AuthContext.Provider value={{isAuth, setAuth}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
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
    </AuthContext.Provider>
  )
}

export default App;