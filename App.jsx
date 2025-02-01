import React from 'react'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {
  const stack = createNativeStackNavigator()
  return (
    <Login />
    // <SignUp/>
    // <NavigationContainer>
    //   <stack.Navigator>
    //     <stack.Screen name="Login" component={Login} />
    //     <stack.Screen name="SignUp" component={SignUp} />
    //   </stack.Navigator>
    // </NavigationContainer>
  )
}

export default App
