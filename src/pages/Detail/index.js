import React, {useState, Fragment } from 'react';
import { Overlay, Text, Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { View } from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import styles from './styles';

export default function Detail() {
    const [showLoading, setShowLoading] = useState(false);
    const [quantityDisabled, setQuantityDisabled] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const route = useRoute();
    const navigation = useNavigation();
    const item = route.params.item;

    function togleOverlay() {
        setOverlayVisible(!overlayVisible);
    }

    function backToSearch() {
        navigation.navigate('Search');
    }

    function goHome() {
        navigation.navigate('Index');
    }
    
    function tryDisableButton(text) {
        if(text.length > 0) {
            setQuantityDisabled(false);
        } else {
            setQuantityDisabled(true);
        }
        setQuantity(text);
    }

    async function updateItem() {
        setShowLoading(true);
        try {
            const response = await api.post(`contagem/efetuar-contagem/${item.id}`, {
                status: 0,
                quantidade: quantity
            });
            setShowLoading(false);
            setQuantityDisabled(true);
            setOverlayVisible(true);
        } catch(error) {
            setShowLoading(false);
            //TODO needs notify error to client
        }
    }

    return (
        <Fragment>

            <View style={styles.detail}>
                <Text 
                    style={styles.incidentProperty}>
                    <Text style={styles.itemText}>Codigo: </Text>{item.endereco.item.codigo}
                </Text>
                <Text 
                    style={styles.incidentValue}>
                    <Text style={styles.itemText}>Item: </Text>{item.endereco.item.nome}
                </Text>
                <Text 
                    style={styles.incidentValue}>
                    <Text style={styles.itemText}>Observacao: </Text>{item.observacao}
                </Text>
                <Text 
                    style={styles.incidentValue}>
                    <Text style={styles.itemText}>Endereco: </Text>{item.endereco.descricao}
                </Text>
            </View>

            <View style={styles.detail} >
                <Input
                    containerStyle={{ width: '90%' }}
                    onChangeText={tryDisableButton}
                    placeholder="Quantidade"
                    label="Informe a quantidade"
                    labelStyle={{ marginTop: 16 }}
                    keyboardType='numeric'
                />
                
                <Button 
                    disabled={quantityDisabled}
                    buttonStyle={styles.updateButton} 
                    title="Atualizar" 
                    onPress={updateItem}
                    loading={showLoading}
                />
            </View>

            <View>
                <Overlay isVisible={overlayVisible} onBackdropPress={togleOverlay}>
                    <View style={styles.popup}>
                        <Text style={styles.popupText}>Contagem atualizada com sucesso</Text>
                        <View style={styles.detail}>
                            <Button title="Fechar" buttonStyle={styles.popupButton}  onPress={backToSearch}></Button>
                        </View>
                    </View>
                </Overlay>
            </View>

        </Fragment>
    )


}