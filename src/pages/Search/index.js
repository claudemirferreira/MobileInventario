import React, {useState, useEffect, Fragment } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Icon,  ListItem, Text,  SearchBar } from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

import styles from './styles';

let helperArray = require('./itensList');

export default function Search() {
    const navigation = useNavigation()

    const [search, setSearch] = useState("");
    const [allItens, setAllItens] = useState([]);
    const [itensFiltered, setItensFiltered] = useState([]);

    function updateSearch(search) {
        setSearch(search);
        var intensFiltered = helperArray.filter(function(item) {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });

        setItensFiltered(intensFiltered)

    }

    function openDetail() {
        navigation.navigate('Detail');
    }

    function loadItens() {
        console.log(helperArray);
        setAllItens(helperArray);
        setItensFiltered(helperArray);
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

            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
                platform="android"
                
            />

            <ScrollView>
                

                <View style={{ backgroundColor: '#ECEFF1', paddingVertical: 8 }}>
                    {itensFiltered.map(item => (
                        <ListItem
                            key={item.id}
                            title={item.name}
                            subtitle={item.address}
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