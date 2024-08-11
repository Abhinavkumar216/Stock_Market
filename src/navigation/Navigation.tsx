import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {useCustomTheme} from './Theme';
import {navigationRef} from '../utils/NavigationUtils';
import HomeScreen from '../screens/dashboard/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import EmailScreen from '../screens/auth/EmailScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const theme = useCustomTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      card: theme.colors.card,
      text: theme.colors.text,
      border: theme.colors.border,
      notification: theme.colors.notification,
      primary: theme.colors.primary,
    },
  };
  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          statusBarColor: theme.colors.background,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
