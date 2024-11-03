import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from './Logo'; 
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Logo /> {/* Add the Logo component here */}
      <Text style={styles.title}>Fish Silage Tracker</Text>
      <Text style={styles.description}>
        Track and monitor the ambient temperature, pH level, and ammonia concentrations of your fish silage in real-time with our web application. {'\n'}
        Stay informed about the fermentation process to ensure optimal conditions for your fish silage production.
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Get Started"
            color="#3578e5"
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24293e',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    width: '80%',
  },
  button: {
    marginHorizontal: 10,
    width: '30%', 
    borderRadius: 20,
    backgroundColor: '#3578e5',
  },
});