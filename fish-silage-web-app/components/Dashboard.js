import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircleIndicator = ({ size, color, value, label }) => {
  return (
    <View style={styles.circleContainer}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 10) / 2} 
          fill={color}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.ValueCountText}>{value}</Text>
        <Text style={styles.unitText}>{label}</Text>
      </View>
    </View>
  );
};

export default function Dashboard() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  const isCritical = (value, type) => {
    if (type === "pH" && (value < 3.6 || value > 4.0)) return true;
    if (type === "ammonia" && value > 10) return true;
    if (type === "temperature" && (value < 26 || value > 30)) return true;
    return false;
  };

  // Example values for each indicator
  const pHValue = "3.6";
  const ammoniaValue = "8%";
  const temperatureValue = "28°C";

  return (
    <View style={styles.container}>
      {/* Status Section */}
      <View style={[styles.statusContainer, { backgroundColor: '#d4edda' }]}>
        <Text style={[styles.statusText, { color: '#155724' }]}>
          {formattedDate} {"\n"}Status: Active
        </Text>
      </View>

      {/* Circle Indicators for pH, Ammonia, and Temperature */}
      <View style={styles.circleIndicatorsContainer}>
        {/* pH Indicator */}
        <View style={styles.indicatorWrapper}>
          <CircleIndicator 
            size={180} 
            color={isCritical(pHValue, "pH") ? '#ff4d4d' : '#00339c'} 
            value={pHValue} 
            label="pH Level" 
          />
          <View style={styles.statusContainerRight}>
            <Text style={styles.statusTextRight}>
            Continuously track pH to ensure optimal {'\n'}
            fermentation conditions.
            </Text>
          </View>
        </View>

        {/* Ammonia Indicator */}
        <View style={styles.indicatorWrapper}>
          <CircleIndicator 
            size={180} 
            color={isCritical(ammoniaValue, "ammonia") ? '#ff4d4d' : '#00339c'} 
            value={ammoniaValue} 
            label="Ammonia" 
          />
          <View style={styles.statusContainerRight}>
            <Text style={styles.statusTextRight}>Monitoring acid levels tracks the progress {'\n'}
              and completion of the {'\n'}
              fermentation process.</Text>
          </View>
        </View>

        {/* Temperature Indicator */}
        <View style={styles.indicatorWrapper}>
          <CircleIndicator 
            size={180} 
            color={isCritical(temperatureValue, "temperature") ? '#ff4d4d' : '#00339c'} 
            value={temperatureValue} 
            label="Temperature" 
          />
          <View style={styles.statusContainerRight}>
            <Text style={styles.statusTextRight}>Controlling the fermentation temperature {'\n'}
              ensures consistent bacterial growth {'\n'}
              and activity.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#24293e',
  },
  statusContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 15,
    width: '100%', 
    alignSelf: 'center',
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  
statusContainerRight:{
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'flex-start',
   marginLeft: 30,
   paddingVertical :10,
   borderRadius:5,
   backgroundColor:'#0077b6', 
   padding: 10,
},
statusTextRight:{
   fontSize: 16,
   color:'white', 
   marginBottom:5,
   padding: 10,
   textAlign: 'center'
},
circleIndicatorsContainer:{
   flexDirection:'column', 
   justifyContent:'space-between', 
   marginBottom :20,
   backgroundColor:'#141a30', 
   borderRadius: 5,
   padding: 10,
   
},
indicatorWrapper:{
   flexDirection:'row', 
   alignItems:'center', 
   width:'100%', 
   marginBottom:20, // Space between indicators
},
circleContainer:{
   justifyContent:'center',
   alignItems:'center',
},
ValueCountText:{
   color :'#fff',
   fontSize :45,
   fontWeight :'bold',
   textAlign :'center',
},
unitText:{
   fontSize :18,
   color:'#fff',
   textAlign:'center',
},
textContainer:{
   position: 'absolute',
   top: '50%', // Adjust this to position vertically centered
   left: '55%',
   transform: [{ translateX: -50 }, { translateY: -50 }],
}
});