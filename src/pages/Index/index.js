import React, { Fragment, useEffect } from 'react';

import { View, Text, Button, BackHandler, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import { onSigOut } from '../../services/auth'

export default function Index() {
    const navigation = useNavigation()
    const route = useRoute();

    useEffect(() => {
        console.log("Navigation name: " + route.name);
        BackHandler.addEventListener('hardwareBackPress', function () {
            if (route.name == 'Index') {
                // BackHandler.exitApp()

                Alert.alert("Alerta!", "Tem certeza que deseja sair da aplicação ?", [
                    {
                        text: "Não",
                        onPress: () => null,
                        style: "cancel"
                    },
                    {
                        text: "Sim", onPress: () => {
                            onSigOut();
                            navigation.navigate('Login');
                        }
                    }
                ]);

                return true;
            }
        });
    })

    function Separator() {
        return <View style={styles.separator} />;
    }

    function navigateToDetail() {
        navigation.navigate('Search');
    }

    function logout() {
        onSigOut();
        navigation.navigate('Login');
    }

    return (
        <Fragment>
            <Header
                placement="left"
                leftComponent={{ icon: '', color: '#fff' }}
                centerComponent={{ text: 'Inventário', style: { color: '#fff' } }}
                rightComponent={{ icon: '', color: '#fff' }}>
            </Header>

            <View style={styles.container}>
                <Text style={styles.title}>Bem-vindo</Text>
                <Button title="Search" onPress={navigateToDetail} />
                <Separator />
                <Button title="Logout" onPress={logout} />
            </View>

        </Fragment>
    )

}