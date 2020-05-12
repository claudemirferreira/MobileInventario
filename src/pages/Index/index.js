import React, { Fragment } from 'react';
import {View, Image, Text, Button} from 'react-native';
import { Header} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Index() {
    const navigation = useNavigation()

    function Separator() {
        return <View style={styles.separator} />;
    }

    function navigateToDetail() {
        navigation.navigate('Search');
    }

    return (
        <Fragment>
            <Header
                placement="left"
                leftComponent={{ icon: '', color: '#fff'}}
                centerComponent={{ text: 'Inventário', style: {color: '#fff'}}}
                rightComponent={{ icon: '', color: '#fff'}}>
            </Header>

            <View style={styles.container}>
                <Text style={styles.title}>Bem-vindo</Text>
                <Button title="Search" onPress={navigateToDetail} />            
            </View>
        </Fragment>
    )

}