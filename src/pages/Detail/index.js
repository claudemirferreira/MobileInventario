import React, {useState, Fragment } from 'react';
import { Header, Button, Text, Input } from 'react-native-elements';
import { View } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import api from '../../services/api';
import styles from './styles';

export default function Detail() {
    const [showLoading, setShowLoading] = useState(false);
    const [quantityDisabled, setQuantityDisabled] = useState(true);
    const [quantity, setQuantity] = useState(0);

    const route = useRoute();
    const item = route.params.item;

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
        const response = await api.post(`contagem/efetuar-contagem/${item.id}`, {
            status: 0,
            quantidade: quantity
        });
        setShowLoading(false);        
    }

    return (
        <Fragment>

            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Detail', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            >
            </Header>

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
                    style={styles.detailsButton} 
                    title="Atualizar" 
                    type="standard"
                    onPress={updateItem}
                    loading={showLoading}
                />
            </View>

        </Fragment>
    )


}