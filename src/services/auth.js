import {AsyncStorage} from 'react-native';

export const TOKEN_KEY = "ïnventario@token";

export const onSigIn = () => AsyncStorage.setItem(TOKEN_KEY, "true");

export const onSigOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isAssignedIn = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return (token != null) ? true : false;  
};