import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import Index from '../../../pages/Search';

import config from '../../config/stack';

const SearchDrawerItem = createStackNavigator({
    Playground: {
      screen: Index,
      navigationOptions: ({ navigation }) => ({
        title: 'Search',
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            type="entypo"
            iconStyle={{ paddingLeft: 10 }}
            onPress={navigation.toggleDrawer}
          />
        ),
      }),
    },
  }, config);
  
  SearchDrawerItem.navigationOptions = {
    drawerLabel: 'Search',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="email"
        size={30}
        iconStyle={{
          width: 30,
          height: 30,
        }}
        type="material"
        color={tintColor}
      />
    ),
  };
  
  export default SearchDrawerItem;
    