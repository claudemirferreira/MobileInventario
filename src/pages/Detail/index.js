import React, { Fragment } from 'react';
import { Header, Icon,  ListItem, Text,  SearchBar } from 'react-native-elements';

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

        </Fragment>
    )
    

}