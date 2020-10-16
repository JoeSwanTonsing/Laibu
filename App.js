import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//stack navigators
import HomeStack from './src/navigation/HomeStack';
import MyBooksStack from './src/navigation/MyBooksStack';
import SettingsStack from './src/navigation/SettingsStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home-sharp' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings-sharp' : 'settings-outline';
              } else if (route.name === 'MyBooks') {
                iconName = focused ? 'book-sharp' : 'book-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#EA8953',
            inactiveTintColor: 'grey',
          }}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="MyBooks" component={MyBooksStack} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
