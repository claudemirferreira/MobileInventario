import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Index from './Index';
import Search from './Search';
import Detail from './Detail';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer > 
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name='Index' component={Index}/>
                <AppStack.Screen name='Search' component={Search}/>
                <AppStack.Screen name='Detaiil' component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}