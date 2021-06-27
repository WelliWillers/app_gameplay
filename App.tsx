import React from 'react';
import { StatusBar, LogBox } from 'react-native';

//fontes
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

//responsavel por fazer o app carregar primeiro as fontes
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

//componentes
import {Background} from './src/components/Background';

//rotas vem deste lugar
import { Routes } from './src/routes';

//context
import { AuthProvider } from './src/hooks/auth';

LogBox.ignoreLogs(['ou are not currently signed in to Expo on your development machine.']);

export default function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });
  
  if (!fontsLoaded) {
    <AppLoading />
  } 

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent  
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>

    </Background>
  );
}