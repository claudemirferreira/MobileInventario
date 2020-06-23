import React, { Fragment, useContext } from 'react';

import { View, Text, Button, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import AuthContext from '../../components/contexts/auth';

export default function Index() {
    const {signOut} = useContext(AuthContext);
    const navigation = useNavigation();

    function Separator() {
        return <View style={styles.separator} />;
    }

    function navigateToDetail() {
        navigation.push('Search');
    }

    function showLogoutConfirmation() {
        Alert.alert("Alerta!", "Tem certeza que deseja fazer o logout ?", [
            {
                text: "Não",
                onPress: () => null,
                style: "cancel"
            },
            {
                text: "Sim", onPress: () => {
                    // onSigOut();
                    signOut();
                }
            }
        ]);
    }

    function logout() {
        showLogoutConfirmation();
    }

    return (
        <Fragment>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Inventário', style: { color: '#fff' } }}
                rightComponent={{ icon: '', color: '#fff' }}>
            </Header>

            <View style={styles.container}>
                <Text style={styles.title}>Bem-vindo</Text>
                <Button title="Pesquisar Contagem" onPress={navigateToDetail} />
                <Separator />
                <Button title="Sair" onPress={logout} />
            </View>

        </Fragment>
    )

}