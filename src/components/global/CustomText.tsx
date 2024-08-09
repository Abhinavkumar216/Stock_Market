import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {FONTS} from '../../constants/Fonts';
import {useTheme} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  variant?:
    | 'body'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'h9';
  fontFamily?: FONTS;
  fontSize?: number;
  style?: TextStyle;
  children?: ReactNode;
  numberOfLines?: number;
}

const CustomText: FC<Props> = ({
  variant = 'body',
  fontFamily = FONTS.Regular,
  fontSize,
  style,
  children,
  numberOfLines,
}) => {
  const {colors} = useTheme();

  let computeFontSize: number;
  switch (variant) {
    case 'h1':
      computeFontSize = RFValue(fontSize || 22);
      break;
    case 'h2':
      computeFontSize = RFValue(fontSize || 20);
      break;
    case 'h3':
      computeFontSize = RFValue(fontSize || 18);
      break;
    case 'h4':
      computeFontSize = RFValue(fontSize || 16);
      break;
    case 'h5':
      computeFontSize = RFValue(fontSize || 14);
      break;
    case 'h6':
      computeFontSize = RFValue(fontSize || 12);
      break;
    case 'h7':
      computeFontSize = RFValue(fontSize || 12);
      break;
    case 'h8':
      computeFontSize = RFValue(fontSize || 10);
      break;
    case 'h9':
      computeFontSize = RFValue(fontSize || 9);
      break;
    default:
      computeFontSize = RFValue(fontSize || 12);
      break;
  }

  const fontFamilyStyle = {
    fontFamily:
      fontFamily === FONTS.Black
        ? 'Roboto-Black'
        : fontFamily === FONTS.Bold
        ? 'Roboto-Bold'
        : fontFamily === FONTS.Light
        ? 'Roboto-Light'
        : fontFamily === FONTS.Medium
        ? 'Roboto-Medium'
        : fontFamily === FONTS.Thin
        ? 'Roboto-Thin'
        : 'Roboto-Regular',
  };

  return (
    <Text
      style={[
        styles.text,
        {color: colors.text, fontSize: computeFontSize},
        fontFamilyStyle,
        style,
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});
