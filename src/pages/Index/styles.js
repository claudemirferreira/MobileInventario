import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({

    container: {
        flex: 1, 
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: 'center',
    },
    
    title: {
        fontSize: 30, 
        marginBottom: 16, 
        marginTop: 40, 
        color: '#13131a',
        fontWeight: 'bold'    
    },

    detailsButton: {
        backgroundColor: '#524f56',
        borderRadius: 10,
        alignItems: "center",
        height: 60,
        width: 300,
    },

    separator: {
        marginVertical: 10,
        borderBottomColor: '#524f56',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

});