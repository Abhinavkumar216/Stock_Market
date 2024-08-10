import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

export const signinWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userinfo',userInfo);
    Alert.alert('idToken');
  } catch (error) {
    console.log(error);
  }
};
