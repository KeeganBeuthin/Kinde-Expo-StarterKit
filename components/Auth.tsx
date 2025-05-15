// components/Auth.tsx
import { useTheming } from '@/hooks/useTheming';
import { useKindeAuth } from '@kinde/expo';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Auth() {
  const kinde = useKindeAuth();
  const { colors } = useTheming();

  const handleSignIn = async () => {
    try {
      const token = await kinde.login({});
      if (token) {
        console.log('User signed in successfully', token);
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleSignUp = async () => {
    try {
      const token = await kinde.register({});
      if (token) {
        console.log('User registered successfully', token);
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

  return !kinde.isAuthenticated ? (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, styles.loginButton]}
        onPress={handleSignIn}
      >
        <Text style={styles.loginButtonText}>Sign in</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.registerButton]}
        onPress={handleSignUp}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </Pressable>
    </View>
  ) : (
    <Pressable
      style={[styles.button, styles.logoutButton]}
      onPress={handleLogout}
    >
      <Text style={styles.logoutButtonText}>Log out</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minHeight: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#334155',
  },
  registerButton: {
    backgroundColor: 'white',
  },
  logoutButton: {
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingHorizontal: 32,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  registerButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  }
});