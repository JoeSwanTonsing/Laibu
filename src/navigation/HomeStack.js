import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screen components
import HomeScreen from '../screens/HomeScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';

const HomeStackScreen = createStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <HomeStackScreen.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EA8953',
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
      <HomeStackScreen.Screen
        name="Details"
        component={ItemDetailsScreen}
        options={{title: 'Details'}}
      />
    </HomeStackScreen.Navigator>
  );
}
