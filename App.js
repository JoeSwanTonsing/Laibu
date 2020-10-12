import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//stack navigators
import HomeStack from './src/navigation/HomeStack';
import SettingsStack from './src/navigation/SettingsStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-sharp' : 'settings-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#EA8953',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
