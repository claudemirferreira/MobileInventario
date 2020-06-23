import React, { Fragment, useContext } from 'react';

import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
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

            <View style={styles.container}>
                <Text style={styles.title}>Bem-vindo</Text>
                
                <Button 
                    buttonStyle={styles.detailsButton}
                    containerStyle={{ marginTop: 32, flex: 0 }}
                    title="Pesquisar Contagem"  
                    onPress={navigateToDetail} 
                />
                
                <Separator />
                
                <Button title="Sair" buttonStyle={styles.detailsButton} onPress={logout} />
            </View>

        </Fragment>
    )

}