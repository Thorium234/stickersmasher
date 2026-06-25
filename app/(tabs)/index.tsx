import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sticker Smash</Text>
      <Text style={styles.subtitle}>Home Screen</Text>

      <Link href="/about" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to About Screen</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#208AEF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
