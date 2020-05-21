import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Index from './Index';
import Search from './Search';
import Detail from './Detail';
import Login from './Login';
import { isAssignedIn } from '../services/auth'

const AppStack = createStackNavigator();

export default function Routes() {

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        isAssignedIn().then(result => {
            setIsLogged(result);
            console.log("is logged: " + isLogged)
        })
    });

    return (
        <NavigationContainer >

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Login' component={Login} />
                <AppStack.Screen name='Index' component={Index} />
                <AppStack.Screen name='Search' component={Search} />
                <AppStack.Screen name='Detail' component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}