import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import HistogramContainer from './Histogram'; // Assuming HistogramContainer is in the same directory

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
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <Text style={styles.trackerTitle}>Controls</Text>

      {/* Horizontal Row Container for Controls and Info */}
      <View style={styles.rowContainer}>
        {/* Controls Container */}
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

        {/* Lower Information Container */}
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

        </View>
      </View>

      {/* HistogramContainer placed below Controls and How to Use */}
      <HistogramContainer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexGrow: 1,
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141a30',
    padding: 10,
    marginRight: 5,
    borderRadius: 10,
  },
  label: {
    color: 'white',
    fontSize: 20,
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
    fontSize: 20,
    paddingHorizontal: 15,
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
  LowerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141a30',
    padding: 10,
    borderRadius: 10,
    marginLeft: 5,
  },
  Doselabel: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  infoText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'justify',
    marginTop: 4,
    paddingHorizontal: 10,
  },
});

export default Controls;
