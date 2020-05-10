import React, {useState, useEffect} from 'react';
import {View, Image, Text, Button, Separator} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

export default function Index() {
    const navigation = useNavigation()

    function Separator() {
        return <View style={styles.separator} />;
    }

    function navigateToDetail() {
        navigation.navigate('Search');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
            </View>
            
            <Text style={styles.title}>Bem-vindo</Text>
            
            <Button title="Search" onPress={navigateToDetail} />            

        </View>
    )

}