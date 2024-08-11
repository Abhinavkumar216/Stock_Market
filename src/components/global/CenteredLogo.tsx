import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import Logo from '../../assets/images/logo_text.png';
import {normalizeHeight, normalizeWidth} from '../../utils/Scaling';

const CenteredLogo: FC = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={Logo} style={styles.img} />
      </View>
    </View>
  );
};

export default CenteredLogo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    marginBottom: 5,
  },
  imgContainer: {
    width: normalizeHeight(110),
    height: normalizeHeight(28),
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
