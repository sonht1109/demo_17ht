import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignupTab from './src/loginPages/SignupTab';
import InfoTab from './src/infoPages/InfoTab';

const App = () => {
  return (
      <NavigationContainer>
        {/* <SignupTab/> */}
        <InfoTab />
      </NavigationContainer>
  )
}

export default App;