import { Auth } from '@/components/Auth';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { UserProfile } from '@/components/UserProfile';
import { useKindeAuth } from '@kinde/expo';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const kinde = useKindeAuth();
  const [isAuth, setIsAuth] = useState(kinde.isAuthenticated);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const insets = useSafeAreaInsets();
  
  useEffect(() => {
    setIsAuth(kinde.isAuthenticated);
  }, [kinde.isAuthenticated]);

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <ThemedView style={[styles.container, { paddingBottom: insets.bottom + 20 }]}>
        <ThemedText style={styles.mainHeading}>
          Auth for modern applications
        </ThemedText>
        
        <ThemedView style={styles.instructionsContainer}>
          <ThemedView style={styles.firstThingsFirst}>
            <ThemedText style={styles.firstThingsFirstText}>
              First things first
            </ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.stepCard}>
            <ThemedView style={styles.stepHeader}>
              <ThemedView style={styles.stepNumber}>
                <ThemedText style={styles.stepNumberText}>1</ThemedText>
              </ThemedView>
              <ThemedText style={styles.stepTitle}>Set callback URLs</ThemedText>
            </ThemedView>
            
            <ThemedView style={styles.stepContent}>
              <ThemedText style={styles.stepText}>
                A. In Kinde, go to <ThemedText style={styles.boldText}>Settings > Applications > [Your app] > View details</ThemedText>.
              </ThemedText>
              
              <ThemedText style={styles.stepText}>
                B. Add your <ThemedText style={styles.boldText}>callback URLs</ThemedText> in the relevant fields. For example:
              </ThemedText>
              
              <ThemedView style={styles.urlSection}>
                <ThemedText style={styles.urlTitle}>Allowed callback URLs:</ThemedText>
                <ThemedView style={styles.codeBlock}>
                  <ThemedText style={styles.codeText}>exp://localhost:8081/--/</ThemedText>
                  <ThemedText style={styles.codeText}>exp://192.168.X.X:8081/--/</ThemedText>
                </ThemedView>
              </ThemedView>
              
              <ThemedView style={styles.urlSection}>
                <ThemedText style={styles.urlTitle}>Allowed logout redirect URLs:</ThemedText>
                <ThemedView style={styles.codeBlock}>
                  <ThemedText style={styles.codeText}>exp://localhost:8081</ThemedText>
                  <ThemedText style={styles.codeText}>exp://192.168.X.X:8081</ThemedText>
                </ThemedView>
              </ThemedView>
              
              <ThemedText style={styles.stepText}>
                C. Select <ThemedText style={styles.boldText}>Save</ThemedText>.
              </ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={styles.stepCard}>
            <ThemedView style={styles.stepHeader}>
              <ThemedView style={styles.stepNumber}>
                <ThemedText style={styles.stepNumberText}>2</ThemedText>
              </ThemedView>
              <ThemedText style={styles.stepTitle}>Get building!</ThemedText>
            </ThemedView>
            
            <ThemedView style={styles.authContainer}>
              <Auth />
            </ThemedView>
          </ThemedView>
        </ThemedView>
        
        {isAuth && (
          <ThemedView style={styles.profileContainer}>
            <UserProfile />
          </ThemedView>
        )}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  mainHeading: {
    fontSize: 42,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 60,
    maxWidth: '80%',
  },
  instructionsContainer: {
    width: '100%',
    maxWidth: 600,
    gap: 16,
  },
  firstThingsFirst: {
    alignItems: 'center',
    marginBottom: 16,
  },
  firstThingsFirstText: {
    fontSize: 14,
    color: 'black',
    backgroundColor: '#f1f5f9',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  stepCard: {
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 12,
    backgroundColor: '#000000',
    overflow: 'hidden',
    marginBottom: 20,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingLeft: 20,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  stepNumberText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
  stepTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  stepContent: {
    padding: 20,
    paddingTop: 0,
  },
  stepText: {
    color: '#94a3b8',
    marginBottom: 16,
    fontSize: 16,
  },
  boldText: {
    fontWeight: '600',
    color: 'white',
  },
  urlSection: {
    marginBottom: 16,
  },
  urlTitle: {
    color: 'white',
    marginBottom: 8,
    fontWeight: '500',
  },
  codeBlock: {
    backgroundColor: '#111827',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  codeText: {
    fontFamily: 'monospace',
    color: '#e2e8f0',
    fontSize: 14,
  },
  authContainer: {
    padding: 20,
  },
  profileContainer: {
    width: '100%',
    marginTop: 30,
  }
});
