import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

import Feed from '../screens/Home/Feed';
import Account from '../screens/Home/Account';
import UploadPost from '../screens/Home/UploadPost';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
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
)

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
)

function Router() {
    return (
        <NavigationContainer>
            <AuthStack />
            {/* <HomeTabs /> */}
        </NavigationContainer>
    )
}

export default Router
