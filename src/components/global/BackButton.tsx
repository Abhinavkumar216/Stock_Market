import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import { goBack } from '../../utils/NavigationUtils';

const BackButton: FC = () => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles.container} onPress={()=> goBack()}>
      <Icon name="arrow-back" size={RFValue(20)} color={colors.text} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 5,
    marginVertical: 5,
  },
});
