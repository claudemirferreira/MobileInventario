import React, { useState, useEffect, Fragment } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, ListItem, SearchBar } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import styles from './styles';

export default function Search() {
    const navigation = useNavigation()
    const [search, setSearch] = useState("");
    const [itensFiltered, setItensFiltered] = useState([]);
    const [showLoading, setShowLoading] = useState(false);

    const searchBarProperties = {
        platform: "android",
    }

    function openDetail(item) {
        navigation.navigate('Detail',{item});
    }

    function clearItens() {
        setItensFiltered([]);
        setShowLoading(false)
    }

    async function loadItens(search) {
        setItensFiltered([]);
        setSearch(search);

        if(search.length > 0) {
            setShowLoading(true);
            const response = await api.get(`contagem/list/${search}`, {});
            setItensFiltered(response.data);
            setShowLoading(false);
        }
    }

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
                    onClear={clearItens}                  
                    value={search}
                    showLoading= {showLoading}                    
                    keyboardType='numeric'
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
                            onPress={() => openDetail(item)}
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