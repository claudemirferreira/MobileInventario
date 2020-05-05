import React from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Search() {
    const navigation = useNavigation();
    const route = useRoute();
        
    
    function navigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#e02041'/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>

                

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Texto 1</Text>
                <Text style={styles.heroTitle}>Texto 2</Text>
                <Text style={styles.heroDesctiption}>Texto contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} >
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )

}