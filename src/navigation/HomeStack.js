import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screen components
import HomeScreen from '../screens/HomeScreen';

const HomeStackScreen = createStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <HomeStackScreen.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#E26D5C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStackScreen.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
    </HomeStackScreen.Navigator>
  );
}
