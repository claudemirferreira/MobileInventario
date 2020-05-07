import React, { Fragment } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Icon,  ListItem, Text,  SearchBar } from 'react-native-elements';

import styles from './styles';

let helperArray = require('./userList');

export default class Search extends React.Component {

    

    state = {
        allUsers: helperArray,
        usersFiltered: helperArray,
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    openDetail = () => {
        console.log("Open Detail")
    };


    
    render() {
        const { search } = this.state;

        return (
            <Fragment>


                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                >
                </Header>

                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    platform="android"
                    
                />

                <ScrollView>
                    

                    <View style={{ backgroundColor: '#ECEFF1', paddingVertical: 8 }}>
                        {this.state.usersFiltered.map(item => (
                            <ListItem
                                key={item.id}
                                title={item.name}
                                subtitle={item.address}
                                chevronColor="white"
                                chevron
                                onPress={this.openDetail}
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
            </Fragment>
        )
    }

}