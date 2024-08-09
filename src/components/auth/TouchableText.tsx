import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FONTS } from '../../constants/Fonts';

const TouchableText: React.FC<{
  firstText: string;
  style: TextStyle;
  onPress: () => void;
}> = ({firstText, onPress, style}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.bottomText, {color: colors.primary},style]}>
        {firstText}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableText;

const styles = StyleSheet.create({
  bottomText: {
    fontFamily: FONTS.Medium,
    fontSize: RFPercentage(1.5),
    marginTop:5
  },
});
