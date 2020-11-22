import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {LoginScreen} from '../screens/Login.js';
import {RegisterScreen} from '../screens/Register.js';
import {ForgotPasswordScreen} from '../screens/ForgotPassword.js';
import {DashboardScreen} from '../screens/Dashboard.js';
import {ProfileScreen} from '../screens/Profile.js';
import {MyPantryScreen} from '../screens/MyPantry.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#E5E5E5',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#E5E5E5',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            title: 'Forgot Password',
            headerStyle: {
              backgroundColor: '#E5E5E5',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={AppTab}
          options={{
            headerShown: false, // change this to `false`
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Tab1Screen({navigation}) {
  return (
    <View>
      <Text>Tab 1</Text>
    </View>
  );
}

const AppTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          /* https://oblador.github.io/react-native-vector-icons/ */
          if (route.name === 'Dashboard') {
            iconName = focused ? 'ios-search-circle' : 'ios-search';
          } else if (route.name === 'Tab1') {
            iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
          } else if (route.name === 'MyPantry') {
            iconName = focused ? 'ios-list-circle' : 'ios-list';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="MyPantry" component={MyPantryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export {AppStack};
