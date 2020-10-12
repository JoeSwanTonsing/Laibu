import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screen components
import SettingsScreen from '../screens/SettingsScreen';

const SettingsStackScreen = createStackNavigator();

export default function SettingsStack({navigation}) {
  return (
    <SettingsStackScreen.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EA8953',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <SettingsStackScreen.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </SettingsStackScreen.Navigator>
  );
}
