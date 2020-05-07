import React, { Fragment } from 'react';
import { Header, Icon,  ListItem, Text,  SearchBar } from 'react-native-elements';

import styles from './styles';

export default class Detail extends React.Component {

    

    render() {

        return (
            <Fragment>

                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                >
                </Header>

            </Fragment>
        )
    }

}