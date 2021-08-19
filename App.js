/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Colors from './src/constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
import Feed from './src/screens/Home/Feed';
import Account from './src/screens/Home/Account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UploadPost from './src/screens/Home/UploadPost';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <NavigationContainer style={backgroundStyle}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;

              if (route.name === 'Feed') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Upload Post') {
                iconName = focused ? 'plus-box' : 'plus-box-outline';
              } else if (route.name === 'Account') {
                iconName = focused ? 'account' : 'account-outline';
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            },
            tabBarActiveBackgroundColor: Colors.darker,
            tabBarInactiveBackgroundColor: Colors.darker,
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.light,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              borderTopWidth: 0,
            },          
          })}>
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Upload Post" component={UploadPost} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
