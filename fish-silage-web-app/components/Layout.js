import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from './Dashboard';
import Controls from './Controls';
import HistogramContainer from './Histogram'; 

const MainLayout = () => {
  const data = [
    { date: new Date(2024, 9, 23), pH: 3.6, ammonia: 8, temperature: 28 }, // Oct 23
    { date: new Date(2024, 9, 24), pH: 3.7, ammonia: 7.5, temperature: 27 }, // Oct 24
    { date: new Date(2024, 9, 25), pH: 3.8, ammonia: 8.5, temperature: 29 }, // Oct 25
    { date: new Date(2024, 9, 26), pH: 3.6, ammonia: 7, temperature: 28 }, // Oct 26
    { date: new Date(2024, 9, 27), pH: 3.7, ammonia: 9, temperature: 27 }, // Oct 27
    { date: new Date(2024, 9, 28), pH: 3.9, ammonia: 6.5, temperature: 30 }, // Oct 28
    { date: new Date(2024, 9, 29), pH: 3.5, ammonia: 10, temperature: 26 }, // Oct 29
  ];

  return (
    <View style={styles.mainContainer}>
      {/* Left pane: Dashboard */}
      <View style={styles.histogramContainer}>
        <HistogramContainer data={data} /> {/* Pass the data array here */}
      </View>

      {/* Middle pane: Histograms */}
      <View style={styles.dashboardContainer}>
        <Dashboard />
      </View>


      {/* Right pane: Controls */}
      <View style={styles.controlsContainer}>
        <Controls />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#24293e',
  },
  dashboardContainer: {
    flex: 1,
    padding: 10,

  },
  histogramContainer: {
    flex: 1, 
    padding: 10,
  },
  controlsContainer: {
    flex: 1, 
    padding: 10,

  },
});

export default MainLayout;