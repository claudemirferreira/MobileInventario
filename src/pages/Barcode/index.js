import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';


export default function BarcodeScanner() {
    const navigation = useNavigation();    

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        setScanned(false);
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        const result = {type: type, data: data}
        setScanned(true); 
        Vibration.vibrate();
        navigation.navigate('Search', result);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    );

}