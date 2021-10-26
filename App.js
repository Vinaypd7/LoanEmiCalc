import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import Result from './screens/Result';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={{flex:1}}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

export function Navigation() {
  return (
 
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
//<Stack.Screen  name="Result" component={Result} />
//<Stack.Screen  name="Home" component={Home} />


