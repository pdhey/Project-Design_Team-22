import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get window width

const Logo = () => {
  return (
    <Image
      source={require('../assets/LOGO.png')}
      style={[styles.logo, { width: width * 0.32, height: width * 0.32 }]} // Responsive size (40% of screen width)
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain', 
    marginBottom: 20,
    borderRadius: 80,
    marginBottom: 60,
  },
});

export default Logo;