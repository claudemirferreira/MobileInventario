import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Index from './Index';
import Search from './Search';
import Detail from './Detail';
import Login from './Login';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer > 
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name='Login' component={Login}/>
                <AppStack.Screen name='Index' component={Index}/>
                <AppStack.Screen name='Search' component={Search}/>
                <AppStack.Screen name='Detail' component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}