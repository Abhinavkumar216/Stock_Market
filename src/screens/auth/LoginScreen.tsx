import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';
import LoginImageDark from '../../assets/images/login_dark_animation.png';
import LoginImageLight from '../../assets/images/login_animation_light.png';
import GoogleIcon from '../../assets/images/google.png';

import {
  screenWidth,
  screenHeight,
  normalizeModerately,
} from '../../utils/Scaling';
import SocialLoginButton from '../../components/auth/SocialLoginButton';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableText from '../../components/auth/TouchableText';
import BottomText from '../../components/auth/BottomText';

const LoginScreen = () => {
  const theme = useColorScheme();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h1" fontFamily={FONTS.Medium}>
          Together we Groww
        </CustomText>
        <CustomText variant="h7" style={styles.subText}>
          Invest • Pay • Loans
        </CustomText>

        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={theme == 'dark' ? LoginImageDark : LoginImageLight}
          />
        </View>
        <SocialLoginButton
          icon={<Image source={GoogleIcon} style={{height: 20, width: 20}} />}
          text="Continue with Google"
          onPress={() => {}}
        />
        <SocialLoginButton
          icon={<Icon name="logo-apple" size={18} color="black" />}
          text="Continue with Google"
          onPress={() => {}}
        />

        <TouchableText
          firstText="Use other email ID"
          onPress={() => {}}
          style={{marginVertical: 30, marginTop: 20}}
        />

        <BottomText />
      </View>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
  imageContainer: {
    width: screenWidth,
    height: screenHeight * 0.45,
    marginVertical: normalizeModerately(30),
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
