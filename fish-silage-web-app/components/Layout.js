import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from './Dashboard';
import Controls from './Controls';

const MainLayout = () => {
  const data = [
    { date: new Date(2024, 9, 23), pH: 3.6, ammonia: 8, temperature: 28 },
    { date: new Date(2024, 9, 24), pH: 3.7, ammonia: 7.5, temperature: 27 },
    { date: new Date(2024, 9, 25), pH: 3.8, ammonia: 8.5, temperature: 29 },
    { date: new Date(2024, 9, 26), pH: 3.6, ammonia: 7, temperature: 28 },
    { date: new Date(2024, 9, 27), pH: 3.7, ammonia: 9, temperature: 27 },
    { date: new Date(2024, 9, 28), pH: 3.9, ammonia: 6.5, temperature: 30 },
    { date: new Date(2024, 9, 29), pH: 3.5, ammonia: 10, temperature: 26 },
  ];

  return (
    <View style={styles.mainContainer}>
      {/* Top row: Controls and Dashboard */}
      <View style={styles.rowContainer}>
        <View style={styles.dashboardContainer}>
          <Dashboard />
        </View>
        <View style={styles.controlsContainer}>
          <Controls />
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#24293e',
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    flex: 1,
  },
  controlsContainer: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#33384d',
    borderRadius: 8,
    padding: 5,
  },
  dashboardContainer: {
    flex: 1,
    marginRight: 5,
    backgroundColor: '#33384d',
    borderRadius: 8,
    padding: 5,
  },
  histogramContainer: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#33384d',
    borderRadius: 8,
    padding: 5,
  },
});

export default MainLayout;
