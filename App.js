// App.js
import { KindeAuthProvider } from '@kinde/expo';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppStack } from './navigation/AppStack';

export default function App() {
  const colorScheme = useColorScheme();
  
  return (
    <SafeAreaProvider>
      <KindeAuthProvider
        config={{
          domain: Constants.expoConfig?.extra?.kindeDomain || "https://your-app.kinde.com", 
          clientId: Constants.expoConfig?.extra?.kindeClientId || "your-client-id",
          scopes: "openid profile email offline",
        }}
      >
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
          <AppStack />
        </NavigationContainer>
      </KindeAuthProvider>
    </SafeAreaProvider>
  );
}