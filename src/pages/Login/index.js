import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

import { Input, Button, Icon } from 'react-native-elements';
import styles from './styles';
const BG_IMAGE = require('../../assets/bg_login.png');

export default function Login() {

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function doLogin() {
    console.log('do login');
    setPassword("")
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
                value={username}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                inputStyle={{ marginLeft: 10 }}
                placeholder={'Username'}
                onChangeText={username => setUsername({ username })}
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
                value={password}
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
                onChangeText={password => setPassword({ password })}
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
                disabled={isLoading}
              />

            </View>

          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  )

}