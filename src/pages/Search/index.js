import React, { useState, useEffect, Fragment } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Icon, ListItem, Text, SearchBar } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import api from '../../services/api';

import styles from './styles';

let helperArray = require('./itensList');

export default function Search() {
    const navigation = useNavigation()
    const [search, setSearch] = useState("");
    const [itensFiltered, setItensFiltered] = useState([]);
    const [showLoading, setShowLoading] = useState(false);

    const searchBarProperties = {
        platform: "android",
    }

    function openDetail() {
        navigation.navigate('Detail');
    }

    function clearItens() {
        setItensFiltered([]);
    }

    async function loadItens(search) {
        setSearch(search);

        if(search.length > 0) {
            setShowLoading(true)
            const response = await api.get(`contagem/list/${search}`, {});
            setItensFiltered([...itensFiltered, ...response.data]);
            setShowLoading(false)
        }
    }

    useEffect(() => {
        loadItens();
    }, []);

    return (
        <Fragment>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Search', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                
            >
            </Header>

            <ScrollView>

                <SearchBar
                    placeholder="Código aqui..."                    
                    onChangeText={loadItens}
                    onKeyPress={clearItens}
                    onClear={clearItens}
                    value={search}
                    showLoading= {showLoading}                    
                    {...searchBarProperties}
                />
                
                <View style={{ backgroundColor: '#ECEFF1', paddingVertical: 8 }}>
                    {itensFiltered.map(item => (
                        <ListItem
                            key={item.id}
                            title={item.endereco.item.nome}
                            subtitle={item.endereco.descricao}
                            chevronColor="white"
                            chevron
                            onPress={openDetail}
                            containerStyle={{
                                marginHorizontal: 16,
                                marginVertical: 8,
                                borderRadius: 8,
                            }}
                        >
                        </ListItem>
                    ))}
                </View>

            </ScrollView>
        </Fragment>
    )


}