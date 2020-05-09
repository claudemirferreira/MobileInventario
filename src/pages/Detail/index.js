import React, { Fragment } from 'react';
import { Header, Button, Icon, ListItem, Text, Input } from 'react-native-elements';
import { View } from 'react-native';

import styles from './styles';

export default function Detail() {

    return (
        <Fragment>

            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Detail', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            >
            </Header>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>Codigo: Teste codigo</Text>
                <Text style={styles.incidentValue}>Nome: Teste nome</Text>
                <Text style={styles.incidentValue}>Endereco: Teste endereco</Text>
            </View>

            <View style={styles.incident}>
                <Input
                    containerStyle={{ width: '90%' }}
                    placeholder="Quantidade"
                    label="Informe a quantidade"
                    labelStyle={{ marginTop: 16 }}
                />
                <Button style={styles.detailsButton} title="Atualizar" type="outline" />

            </View>

            <View >
            </View>

        </Fragment>
    )


}