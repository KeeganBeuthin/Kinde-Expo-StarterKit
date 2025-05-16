// app/(tabs)/dashboard.tsx
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { UserProfile } from '@/components/UserProfile';
import { useKindeAuth } from '@kinde/expo';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  const kinde = useKindeAuth();
  const insets = useSafeAreaInsets();
  
  // Redirect to home if not authenticated
  useEffect(() => {
    if (!kinde.isAuthenticated) {
      router.replace('/');
    }
  }, [kinde.isAuthenticated]);

  const handleLogout = async () => {
    try {
      await kinde.logout({ revokeToken: true });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <ScrollView 
      style={styles.scrollView} 
      contentContainerStyle={styles.scrollContent}
    >
      <ThemedView style={[styles.container, { paddingBottom: insets.bottom + 20 }]}>
        <ThemedText style={styles.mainHeading}>
          Your authentication is all sorted!
        </ThemedText>
        
        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardTitle}>User Profile</ThemedText>
          <UserProfile />
        </ThemedView>
        
        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardTitle}>Get started with Kinde</ThemedText>
          <ThemedText style={styles.cardText}>
            Now that you're authenticated, you can explore all the features Kinde has to offer.
          </ThemedText>
          
          <ThemedView style={styles.linkContainer}>
            <ThemedView style={styles.linkButton}>
              <ThemedText style={styles.linkText}>Manage Users</ThemedText>
            </ThemedView>
            
            <ThemedView style={styles.linkButton}>
              <ThemedText style={styles.linkText}>Authentication</ThemedText>
            </ThemedView>
            
            <ThemedView style={styles.linkButton}>
              <ThemedText style={styles.linkText}>Feature Flags</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  mainHeading: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 12,
    backgroundColor: 'white',
    overflow: 'hidden',
    marginBottom: 20,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginBottom: 16,
  },
  cardText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  linkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  linkButton: {
    backgroundColor: '#f1f5f9',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 8,
  },
  linkText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,
  },
  logoutButtonContainer: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  }
});