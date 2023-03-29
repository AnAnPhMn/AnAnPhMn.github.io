import {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QrCode from './src/view/QrCode';
import QrTime from './src/view/QrTime';
import Loading from './src/view/Loading';
import Star from './src/view/Star';
import Huongdan from './src/view/Huongdan';
import Welcome from './src/view/Welcome';
import Thankyou from './src/view/Thankyou';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Welcome: undefined;
  Huongdan: undefined;
  Star: undefined;  
  Loading: undefined;
  QrTime: undefined;
  QrCode: undefined;
  Thankyou: undefined;

};

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Huongdan" component={Huongdan} />
        <Stack.Screen name="Star" component={Star} />
        <Stack.Screen name="Loading" component={Loading} />     
        <Stack.Screen name="QrTime" component={QrTime} />        
        <Stack.Screen name="QrCode" component={QrCode} />    
        <Stack.Screen name="Thankyou" component={Thankyou} /> 

       
   

      </Stack.Navigator>
    </NavigationContainer>
  );
}


