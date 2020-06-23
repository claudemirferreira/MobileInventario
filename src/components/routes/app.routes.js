import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../../pages/Index';
import Search from '../../pages/Search';
import Detail from '../../pages/Detail';


const AppStack = createStackNavigator();

export default function AppRoutes() {

    return (
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Index" component={Index} ></AppStack.Screen>
            <AppStack.Screen name="Search" component={Search} ></AppStack.Screen>
            <AppStack.Screen name="Detail" component={Detail} ></AppStack.Screen>
        </AppStack.Navigator>
    )

};