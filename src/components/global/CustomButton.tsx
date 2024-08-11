import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import CustomText from './CustomText';
import {FONTS} from '../../constants/Fonts';
import {useTheme} from '@react-navigation/native';
import {Colors as Colorw} from '../../constants/Colors';

interface CustomButtonProps {
  title: string;
  loading: boolean;
  disabled: boolean;
  onPress: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  loading,
  disabled,
  onPress,
}) => {
  const {colors} = useTheme();
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    if (loading) {
      animatedValue.setValue(0);
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ).start();
    } else {
      animatedValue.stopAnimation();
    }

    return () => {};
  }, [loading, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 400],
  });

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.btn,
        {backgroundColor: loading || disabled ? colors.card : Colorw.profit},
      ]}>
      <CustomText fontFamily={FONTS.Medium} variant="h7">
        {title}
      </CustomText>
      {loading && (
        <Animated.View
          style={[
            styles.loadingIndicator,
            {
              transform: [
                {
                  translateX,
                },
              ],
            },
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    padding: 14,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  loadingIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 2,
    backgroundColor: Colorw.profit,
    width: '100%',
  },
});
