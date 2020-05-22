import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { onSigIn } from '../../services/auth'
import api from '../../services/api';

import { Input, Button, Icon } from 'react-native-elements';
import styles from './styles';
const BG_IMAGE = require('../../assets/bg_login.png');


export default function Login() {

  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function doLogin() {
    setIsLoading(true)
    try {
      const result = await api.post('user/authentication', {
        username: username,
        password: password
      });
      onSigIn(result.data);
      setPassword("")
      setIsLoading(false)
      setDisableButton(true)
      navigation.navigate('Index');
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      canDisableButton();
    }
  }

  function handleUsername(text) {
    setUsername(text);
    canDisableButton();
  }

  function handlePassword(text) {
    setPassword(text);
    canDisableButton();
  }

  function canDisableButton() {
    if (username.length > 3 && password.length > 3) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
        <View>
          <KeyboardAvoidingView
            contentContainerStyle={styles.loginContainer}
            behavior="position"
          >
            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.titleText}>INVENTÁRIO</Text>
              </View>
              <View>
                <Text style={styles.titleText}>Autenticação</Text>
              </View>
            </View>

            <View style={styles.formContainer}>
              <Input
                leftIcon={
                  <Icon
                    name="envelope-o"
                    type="font-awesome"
                    color="rgba(0, 0, 0, 0.38)"
                    size={25}
                    style={{ backgroundColor: 'transparent' }}
                  />
                }
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                inputStyle={{ marginLeft: 10 }}
                placeholder={'Username'}
                onChangeText={handleUsername}
                errorMessage={
                  isEmailValid ? null : 'Please enter a valid email address'
                }
              />

              <Input
                leftIcon={
                  <Icon
                    name="lock"
                    type="simple-line-icon"
                    color="rgba(0, 0, 0, 0.38)"
                    size={25}
                    style={{ backgroundColor: 'transparent' }}
                  />
                }
                keyboardAppearance="light"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                blurOnSubmit={true}
                containerStyle={{
                  marginTop: 16,
                  borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                }}
                inputStyle={{ marginLeft: 10 }}
                placeholder={'Password'}
                value={password}
                onChangeText={handlePassword}
                errorMessage={
                  isPasswordValid
                    ? null
                    : 'Please enter at least 8 characters'
                }
              />

              <Button
                buttonStyle={styles.loginButton}
                containerStyle={{ marginTop: 32, flex: 0 }}
                activeOpacity={0.8}
                title='LOGIN'
                onPress={doLogin}
                titleStyle={styles.loginTextButton}
                loading={isLoading}
                disabled={disableButton}
              />

            </View>

          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>

  )

}