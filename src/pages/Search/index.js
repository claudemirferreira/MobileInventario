import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

export default function Search() {
    const [itens, setItens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState();

    const navigation = useNavigation();
    const route = useRoute();
    
    function navigateBack() {
        navigation.goBack();
    }

    async function loadItens() {
        if(loading) {
            return;
        }

        if(total > 0 && itens.length === total) {
            return;
        }

        setLoading(true);

        // const response = await api.get('item', {params: {item}});
        await api.get('item', {params: {item}}).then(response => {
            setItems([... itens, ...response.data]); 
        });

        // setItems([... itens, ...response.data]);
        //setTotal(response.headers['x-total-count']);
        //setPage(page+1);
        setLoading(false);

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

        </View>
    )

}