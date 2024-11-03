import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './components/HomeScreen';
import Layout from './components/Layout'; // Layout component
import Logo from './components/Logo';
import { StyleSheet, View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
          tabBarStyle: { backgroundColor: '#24293e' },
          tabBarIndicatorStyle: {
            backgroundColor: 'rgba(36, 46, 73, 0.5)',
            height: '100%',
            borderRadius: 10,
          },
          tabBarItemStyle: {
            paddingVertical: 5,
            paddingHorizontal: 10,
            margin: 3,
            borderRadius: 10,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerTitle: () => <Logo />, // Centered logo on Home screen
            headerStyle: {
              backgroundColor: '#24293e',
            },
            tabBarLabel: ({ focused }) => (
              <View style={styles.tabLabelContainer}>
                <Text style={{ color: focused ? '#fff' : '#aaa' }}>Home</Text>
              </View>
            ),
          }} 
        />
        <Tab.Screen 
          name="Dashboard" 
          component={Layout} 
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={styles.tabLabelContainer}>
                <Text style={{ color: focused ? '#fff' : '#aaa' }}>Layout</Text>
              </View>
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center-aligns tab label text
  },
});
