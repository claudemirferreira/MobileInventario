import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../pages/Login';


const AuthStack = createStackNavigator();

export default function AuthRoutes() {

    return(    
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen  name="Authentication" component={Login}></AuthStack.Screen>
        </AuthStack.Navigator>
    )

};