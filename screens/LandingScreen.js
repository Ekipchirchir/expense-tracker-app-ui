import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#000000', '#1A1A1A', '#2b2b2bdd']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Walleto</Text>
        <Text style={styles.subtitle}> Track your money. Control your future.  </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.smallInfo}>Expense & Finance Tracker  </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    color: 'white',
    marginBottom: 10,
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#D3D3D3',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  smallInfo: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
});
