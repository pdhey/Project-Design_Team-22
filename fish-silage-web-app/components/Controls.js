import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Controls = () => {
  const [dose, setDose] = useState(1); // Initial dose in mL
  const [temperature, setTemperature] = useState(28); // Initial temperature in °C
  const [speed, setSpeed] = useState(null); // No initial speed selected

  // Functions to increment or decrement dose and temperature
  const changeDose = (value) => {
    setDose((prevDose) => Math.max(1, prevDose + value)); // Min dose is 1 mL
  };

  const changeTemperature = (value) => {
    setTemperature((prevTemp) => Math.max(0, prevTemp + value)); // Min temp is 0°C
  };

  // Function to set mixing speed
  const selectSpeed = (selectedSpeed) => {
    setSpeed(selectedSpeed);
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.trackerTitle}>Controls</Text>

      <View style={styles.container}>
        {/* Acid Dose Control */}
        <Text style={styles.label}>Acid Dose</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.valueButton} onPress={() => changeDose(-1)}>
            <Text style={styles.buttonText}>&#9664;</Text>
          </TouchableOpacity>
          <Text style={styles.controlValue}>{dose} mL</Text>
          <TouchableOpacity style={styles.valueButton} onPress={() => changeDose(1)}>
            <Text style={styles.buttonText}>&#9654;</Text>
          </TouchableOpacity>
        </View>

        {/* Temperature Control */}
        <Text style={styles.label}>Temperature</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.valueButton} onPress={() => changeTemperature(-1)}>
            <Text style={styles.buttonText}>&#9664;</Text>
          </TouchableOpacity>
          <Text style={styles.controlValue}>{temperature}°C</Text>
          <TouchableOpacity style={styles.valueButton} onPress={() => changeTemperature(1)}>
            <Text style={styles.buttonText}>&#9654;</Text>
          </TouchableOpacity>
        </View>

        {/* Mixing Speed Control */}
        <Text style={styles.label}>Mixing Speed</Text>
        <View style={styles.speedGroup}>
          {['Slow', 'Med', 'Fast'].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.speedButton, speed === option && styles.activeSpeedButton]}
              onPress={() => selectSpeed(option)}
            >
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Additional Information Text Below the Controls */}
      <View style={styles.LowerContainer}>
      <Text style={styles.label}>How to Use?</Text>
      <Text style={styles.Doselabel}>Acid Dose and Temperature</Text>
        <Text style={styles.infoText}>
        Press ▲ to increase the value {'\n'}
        Press ▼ to decrease the value {'\n'}
        </Text>
        <Text style={styles.Doselabel}>Mixing Speed</Text>
        <Text style={styles.infoText}>
        Slow: Light Mixing {'\n'}
        Med : Regular Mixing {'\n'}
        Fast: Rapid Mixing {'\n'}
        </Text>
        <Text style={styles.Doselabel}>Note:</Text>
          <Text style={styles.infoText}>
          What are the ideal values? {'\n'}
          pH level: 3.6 - 4.0 {'\n'}
          Temperature: 26°C - 30°C {'\n'}
          Ammonia Level: less than or equal to 10% {'\n'}
 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#24293e',
  },
  trackerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141a30',
    padding: 20,
    width: '100%', 
    borderRadius: 10,
  },
  label: {
    color: 'white',
    fontSize: 24,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  valueButton: {
    backgroundColor: '#264653',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  controlValue: {
    color: 'white',
    fontSize: 24,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#264653',
    borderRadius: 5,
  },
  speedGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  speedButton: {
    backgroundColor: '#0077b6',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeSpeedButton: {
    backgroundColor: '#00b4d8',
  },
  
// New Style for Additional Information Text
infoText:{
   color:'white',
   fontSize :16,
   textAlign: 'justify',
   marginTop :4, // Space above the text
   paddingHorizontal :22,
   justifyContent: 'flex-start', // Padding for better readability
},
LowerContainer:{
    marginTop: 8,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:'#141a30', // Optional background for the lower container
   paddingVertical :10, // Padding for the lower container
   width:'100%', // Use full width for better responsiveness
   borderRadius :10,
},
Doselabel: {
    color:'white',
    fontSize :18,
    textAlign:'center',
    marginTop :15, 
    paddingHorizontal :10, 
    fontWeight: 'bold',
}
});

export default Controls;