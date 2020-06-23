import {AsyncStorage} from 'react-native';

export const USER_KEY = "inventario@user";
export const TOKEN_KEY = "inventario@token";

export const afterSigIn = (user) => {
    AsyncStorage.setItem(TOKEN_KEY, user.token)
    AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
    console.log("Token updated: " + getToken())
};

export const afterSigOut = () => {
    AsyncStorage.removeItem(TOKEN_KEY)
    AsyncStorage.removeItem(USER_KEY)
};

export const getToken = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
}
