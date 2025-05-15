// components/KindeHeader.js
import { useKindeAuth } from '@kinde/expo';
import * as Linking from 'expo-linking';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function KindeHeader() {
  const insets = useSafeAreaInsets();
  const kinde = useKindeAuth();

  const handleSignIn = async () => {
    try {
      const token = await kinde.login({});
      if (token) {
        console.log('User signed in successfully');
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleSignUp = async () => {
    try {
      const token = await kinde.register({});
      if (token) {
        console.log('User registered successfully');
      }
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await kinde.logout({ revokeToken: true });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <View style={styles.logoContainer}>
        <Pressable onPress={() => Linking.openURL('https://kinde.com')} style={styles.logoButton}>
          <Text style={styles.kindeLogo}>Kinde</Text>
        </Pressable>
        
        <Text style={styles.divider}>/</Text>
        
        <Pressable onPress={() => Linking.openURL('https://expo.dev')} style={styles.logoButton}>
          <Text style={styles.expoLogo}>Expo</Text>
        </Pressable>
      </View>
      
      <View style={styles.authButtons}>
        {!kinde.isAuthenticated ? (
          <>
            <Pressable onPress={handleSignIn} style={styles.signInButton}>
              <Text style={styles.signInText}>Sign in</Text>
            </Pressable>
            <Pressable onPress={handleSignUp} style={styles.registerButton}>
              <Text style={styles.registerText}>Register</Text>
            </Pressable>
          </>
        ) : (
          <Pressable onPress={handleLogout} style={styles.registerButton}>
            <Text style={styles.registerText}>Log out</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoButton: {
    padding: 8,
  },
  kindeLogo: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  expoLogo: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  divider: {
    marginHorizontal: 8,
    color: '#666',
    fontSize: 16,
  },
  authButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  signInButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  registerButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  signInText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  registerText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
});