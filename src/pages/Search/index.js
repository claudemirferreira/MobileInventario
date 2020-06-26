import React, { useState, useEffect, Fragment } from 'react';
import { View, ScrollView, ToastAndroid, Vibration, StyleSheet } from 'react-native';
import { Text, Button, ListItem, Overlay, SearchBar } from 'react-native-elements';
import { useRoute, useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import api from '../../services/api';
import styles from './styles';

export default function Search() {
    const navigation = useNavigation();
    const route = useRoute();

    const [search, setSearch] = useState();
    const [itensFiltered, setItensFiltered] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [openScan, setOpenScan] = useState(false);


    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }), [];

    const searchBarProperties = {
        platform: "android"
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

    function clearItens() {
        setItensFiltered([]);
        setShowLoading(false);
        setSearch('');
        route.params = undefined;
    }

    async function loadItens(search) {
        setItensFiltered([]);
        setSearch(search);

        if (search.length > 4) {
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

    const handleBarCodeScanned = ({ type, data }) => {
        const result = { type: type, data: data }
        setScanned(false);
        setOpenScan(false);
        Vibration.vibrate();
        loadItens(data);
    };

    function handleBarCode() {
        setOpenScan(true);
    }

    return (




        <Fragment>


            {openScan &&
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                </View>
            }

            {!openScan &&
                <ScrollView>

                    <View style={styles.searchContainer}>
                        <SearchBar
                            inputStyle={{backgroundColor: 'white'}}
                            containerStyle={{backgroundColor: 'white', borderWidth: 5, borderRadius: 10}}
                            
                            placeholder="Código aqui..."
                            onChangeText={text => (loadItens(text))}
                            onClear={clearItens}
                            value={search}
                            showLoading={showLoading}
                            keyboardType='numeric'
                            {...searchBarProperties}
                        />

                        <Button
                            
                            title="Barcode"
                            onPress={handleBarCode}
                            
                            buttonStyle={styles.scannerButton}
                        />
                    </View>

                    <View style={{ backgroundColor: '#ECEFF1', paddingVertical: 8 }}>
                        {itensFiltered.map(item => (
                            <ListItem
                                key={item.id}
                                title={item.id + ":" + item.endereco.item.nome}
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
            }

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