import React, { Fragment } from 'react';
import { Header, Content, Container, ListItem, ScrollView, Thumbnail, Text, Body, SearchBar } from 'react-native-elements';

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

                {this.state.usersFiltered.map(item => (

                    <ListItem
                        key={item.id}
                        leftAvatar={{ source: { uri: item.image, } }}
                        title={item.name}
                        subtitle={item.address}
                    >
                    </ListItem>

                ))}


            </Fragment>
        )
    }

}