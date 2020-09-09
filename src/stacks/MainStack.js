import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import SignIn from '../screens/Signin'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator
    //primeira tela a ser chamada
    initialRouteName="Preload"
    //cabeçalho some
    screenOptions={{
        headerShown: false
    }}
    
    >


    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
)