import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddPoint from './src/popup thông báo/AddPoint';
import FullBottle from './src/popup thông báo/FullBottle';
import Thanks from './src/popup thông báo/Thanks';
import Huongdan from './src/views/Huongdan';
import Loading from './src/views/Loading';
import QrCode from './src/views/QrCode';
import QrTime from './src/views/QrTime';
import Star from './src/views/Star';
import Thankyou from './src/views/Thankyou';
import Welcome from './src/views/Welcome';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Huongdan" component={Huongdan} />
        <Stack.Screen name="Star" component={Star} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
        <Stack.Screen name="AddPoint" component={AddPoint} />
        <Stack.Screen name="QrTime" component={QrTime} />
        <Stack.Screen name="Thanks" component={Thanks} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


