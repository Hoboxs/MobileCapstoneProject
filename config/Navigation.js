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

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {LoginScreen} from '../screens/Login.js';
import {RegisterScreen} from '../screens/Register.js';
import {ForgotPasswordScreen} from '../screens/ForgotPassword.js';
import {DashboardScreen} from '../screens/Dashboard.js';
import {ProfileScreen} from '../screens/Profile.js';
import {MyPantryScreen} from '../screens/MyPantry.js';
import {FavoritesScreen} from '../screens/Favorites.js';
import {SearchRecipesScreen} from '../screens/SearchRecipes.js';
import {StartRecipeScreen} from '../screens/StartRecipe.js';
import { SearchParametersScreen } from '../screens/SearchParameters.js';

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
               title: '',
               headerStyle: {
                 elevation: 0,
                 shadowOpacity: 0
               },
               headerTransparent: true,
             }}

         />
         <Stack.Screen
           name="Register"
           component={RegisterScreen}
           options={{
               title: '',
               headerStyle: {
                 elevation: 0,
                 shadowOpacity: 0
               },
               headerTransparent: true,
             }}
         />
         <Stack.Screen
           name="ForgotPassword"
           component={ForgotPasswordScreen}
           options={{
               title: '',
               headerStyle: {
                 elevation: 0,
                 shadowOpacity: 0
               },
               headerTransparent: true,
             }}
         />
         <Stack.Screen name="Dashboard"
          component={AppTab}
          options={{
            headerShown: false, // change this to `false`
          }}/>

          <Stack.Screen
           name="SearchParameters"
           component={SearchParametersScreen}
           options={{
               title: '',
               headerStyle: {
                 elevation: 0,
                 shadowOpacity: 0
               },
               headerTransparent: true,
             }}
         />
          <Stack.Screen
           name="StartRecipe"
           component={StartRecipeScreen}
           options={{
               title: '',
               headerStyle: {
                 elevation: 0,
                 shadowOpacity: 0
               },
               headerTransparent: true,
             }}
         />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

const AppTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            /* https://oblador.github.io/react-native-vector-icons/ */
            if (route.name === 'Dashboard') {
              iconName = focused ? 'ios-search-circle' : 'ios-search';
            } else if (route.name === 'Favorites') {
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
      <Tab.Screen name="Dashboard"component={DashboardScreen}/>
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="MyPantry" component={MyPantryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export {AppStack};
