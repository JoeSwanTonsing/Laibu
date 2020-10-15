import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screen components
import MyBooksScreen from '../screens/MyBooksScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';

const MyBooksStackScreen = createStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <MyBooksStackScreen.Navigator
      initialRouteName="MyBooks"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EA8953',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <MyBooksStackScreen.Screen
        name="MyBooks"
        component={MyBooksScreen}
        options={{title: 'My Books'}}
      />
      <MyBooksStackScreen.Screen
        name="Details"
        component={ItemDetailsScreen}
        options={{title: 'Details'}}
      />
    </MyBooksStackScreen.Navigator>
  );
}
