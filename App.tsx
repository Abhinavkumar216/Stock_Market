import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '1058180052242-5v8hsqa1gtvhog57iq8d0su8ci6siuv7.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

const App = () => {
  return <Navigation />;
};

export default App;
