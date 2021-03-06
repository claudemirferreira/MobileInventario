import React, { useState, Fragment } from 'react';
import { View, ScrollView, ToastAndroid } from 'react-native';
import { Text, Button, ListItem, Overlay, SearchBar } from 'react-native-elements';

import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import styles from './styles';

export default function Search() {
    const navigation = useNavigation();    
    const route = useRoute();

    const [search, setSearch] = useState("");
    const [itensFiltered, setItensFiltered] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);

    const searchBarProperties = {
        platform: "android",
    }

    function togleDialog() {
        setDialogVisible(!dialogVisible);
    }

    function openDetail(item) {
        if (item.status != 1) {
            navigation.navigate('Detail', { item });
            clearItens();
            setSearch("");
        } else {
            const message = "Contagem já efetuada para o item selecionado";
            showToast(message);
        }
    }

    function showToast(message) {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
        );
    }

    function goHome() {
        navigation.goBack();
    }

    function clearItens() {
        setItensFiltered([]);
        setShowLoading(false)
    }

    async function loadItens(search) {
        setItensFiltered([]);
        setSearch(search);

        if (search.length > 0) {
            setShowLoading(true);
            try {
                const response = await api.get(`contagem/lista/${search}`, {});
                setItensFiltered(response.data);
                setShowLoading(false);
            } catch (error) {
                setShowLoading(false);
                console.log(error)
                if (!error.response) {
                    console.log('Cold not connect to server');
                    togleDialog();
                }
            }

        }
    }

    return (
        <Fragment>

            <ScrollView>

                <SearchBar
                    placeholder="Código aqui..."
                    onChangeText={loadItens}
                    onClear={clearItens}
                    value={search}
                    showLoading={showLoading}
                    keyboardType='numeric'
                    {...searchBarProperties}
                />

                <View style={{ backgroundColor: '#ECEFF1', paddingVertical: 8 }}>
                    {itensFiltered.map(item => (
                        <ListItem
                            key={item.id}
                            title={item.id +":"+ item.endereco.item.nome}
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

            <View>
                <Overlay isVisible={dialogVisible} onBackdropPress={togleDialog}>
                    <View style={styles.detail}>
                        <Text>Erro ao listar a contagem solicitada</Text>
                        <View style={styles.detail}>
                            <Button title="Fechar" ></Button>
                        </View>
                    </View>
                </Overlay>
            </View>
        </Fragment>
    )


}