import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory-native';

// Function to format date to mm/dd/yy
const formatDate = (date) => {
  const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString(undefined, options);
};

const HistogramContainer = () => {

  const data = [
    { date: new Date(2024, 9, 23), pH: 3.6, ammonia: 8, temperature: 28 }, // Oct 23
    { date: new Date(2024, 9, 24), pH: 3.7, ammonia: 7.5, temperature: 27 }, // Oct 24
    { date: new Date(2024, 9, 25), pH: 3.8, ammonia: 8.5, temperature: 29 }, // Oct 25
    { date: new Date(2024, 9, 26), pH: 3.6, ammonia: 7, temperature: 28 }, // Oct 26
    { date: new Date(2024, 9, 27), pH: 3.7, ammonia: 9, temperature: 27 }, // Oct 27
    { date: new Date(2024, 9, 28), pH: 3.9, ammonia: 6.5, temperature: 30 }, // Oct 28
    { date: new Date(2024, 9, 29), pH: 3.5, ammonia: 10, temperature: 26 }, // Oct 29
  ];

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.trackerTitle}>HISTORY</Text>

      {/* pH Level Line Chart */}
      <View style={styles.histogramBackground}>
        <Text style={styles.histogramTitle}>pH Level History</Text>
        <VictoryChart width={screenWidth - 10}>
          <VictoryAxis 
            tickFormat={data.map(d => formatDate(d.date))} 
            label="Date"
            style={{
              axisLabel: { padding: 30 },
              ticks: { stroke: "#ffffff" },
              tickLabels: { fill: "#ffffff" }
            }}
          />
          <VictoryAxis 
            dependentAxis 
            label="pH Level"
            style={{
              axisLabel: { padding: 30 },
              ticks: { stroke: "#ffffff" },
              tickLabels: { fill: "#ffffff" }
            }}
          />
          <VictoryLine
            data={data.map(d => ({ x: formatDate(d.date), y: d.pH }))}
            style={{ data: { stroke: '#33ccff', strokeWidth: 2 } }}
          />
        </VictoryChart>
      </View>

      {/* Ammonia Level Line Chart */}
      <View style={styles.histogramBackground}>
        <Text style={styles.histogramTitle}>Ammonia Level History</Text>
        <VictoryChart width={screenWidth - 10}>
          <VictoryAxis 
            tickFormat={data.map(d => formatDate(d.date))} 
            label="Date"
            style={{
              axisLabel: { padding: 30 },
              ticks: { stroke: "#ffffff" },
              tickLabels: { fill: "#ffffff" }
            }}
          />
          <VictoryAxis 
            dependentAxis 
            label="Ammonia (%)"
            style={{
              axisLabel: { padding: 30 },
              ticks: { stroke: "#ffffff" },
              tickLabels: { fill: "#ffffff" }
            }}
          />
          <VictoryLine
            data={data.map(d => ({ x: formatDate(d.date), y: d.ammonia }))}
            style={{ data: { stroke: '#ffcc00', strokeWidth: 2 } }}
          />
        </VictoryChart>
      </View>

      {/* Temperature Line Chart */}
      <View style={styles.histogramBackground}>
        <Text style={styles.histogramTitle}>Temperature History</Text>
        <VictoryChart width={screenWidth - 10}>
          <VictoryAxis 
            tickFormat={data.map(d => formatDate(d.date))} 
            label="Date"
            style={{
              axisLabel: { padding: 30 },
              ticks: { stroke: "#ffffff" },
              tickLabels: { fill: "#ffffff" }
            }}
          />
          <VictoryAxis 
            dependentAxis 
            label="Temperature (°C)"
            style={{
              axisLabel: { padding: 30 },
              ticks: { stroke: "#ffffff" },
              tickLabels: { fill: "#ffffff" }
            }}
          />
          <VictoryLine
            data={data.map(d => ({ x: formatDate(d.date), y: d.temperature }))}
            style={{ data: { stroke: '#ff5733', strokeWidth: 2 } }}
          />
        </VictoryChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer:{
    backgroundColor:'#24293e',
    paddingVertical :15,
    paddingHorizontal :20,
    borderRadius :5,
    marginVertical :10,
    alignSelf :'center',
    width :'100%',
},
errorText:{
   color:'red',
   textAlign:'center',
   fontSize :18,
},
histogramBackground:{
   backgroundColor:'#141a30', 
   borderRadius :5,
   paddingVertical :10,
   paddingHorizontal :15,
   marginBottom :15,
},
histogramTitle:{
   color:'#fff',
   fontSize :18,
   textAlign :'center',
   marginBottom :10,
   fontWeight :'bold',
},
trackerTitle:{
   color:'white',
   fontSize :24,
   fontWeight :'bold',
   marginBottom :10,
   textAlign :'center',
},
});

export default HistogramContainer;