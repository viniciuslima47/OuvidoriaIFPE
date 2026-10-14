import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRoutes from './src/routes/AppRoutes';
import { createStore } from "tinybase";


const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#20B77A',
    primaryContainer: '#D1F4E5',      // Um verde claro suave para o fundo do selecionado
    onPrimaryContainer: '#0F573A',    // Cor do texto/ícone dentro do verde claro
    secondaryContainer: '#D1F4E5',    // Em alguns componentes MD3 o estado ativo usa secondaryContainer
    onSecondaryContainer: '#0F573A',      // Cor principal (Botões, seleções)
    secondary: '#000000',       // Cor secundária
    inverseSurface: '#333333',   // Cor do fundo da Snackbar (padrão escuro)
    inverseOnSurface: '#FFFFFF', // Cor do texto/ícone dentro da Snackbar
    error: '#FF3333',           // Cor para erros
    background: '#FFFFFF',      // Fundo de telas
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}