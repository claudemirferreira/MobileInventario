import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/components/contexts/auth';
import Routes from './src/components/routes';


export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider >
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}