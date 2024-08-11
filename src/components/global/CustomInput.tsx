import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, useState} from 'react';
import {TextStyle} from 'react-native-size-matters';
import {useTheme} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface InputProps {
  label?: string;
  iconName?: string;
  error?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disabled?: boolean;
  disabledBackground?: boolean;
  password?: boolean;
  textTop?: boolean;
  ContainerStyle?: ViewStyle;
  required?: boolean;
  textInputStyle?: any;
  onFocus?: () => {};
}
const CustomInput: FC<InputProps & React.ComponentProps<typeof TextInput>> = ({
  label,
  iconName,
  error,
  leftIcon,
  rightIcon,
  disabled,
  disabledBackground,
  password,
  textTop,
  ContainerStyle,
  required,
  textInputStyle,
  onFocus,
  ...props
}) => {
  const {colors} = useTheme();
  const theme = useColorScheme();
  const [isFocused, setIsFocused] = useState<boolean>(true);
  const [hideEyeIcon, setHideEyeIcon] = useState<boolean>(true);
  return (
    <View style={styles.inputMainCOntainer}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, {color: colors.text}]}>
            {label} {required && '*'}
          </Text>
        </View>
      )}

      <View
        style={[
          styles.inputContainer,
          {
            ...ContainerStyle,
            borderColor: error
              ? 'red'
              : isFocused
              ? Colors.themeColor
              : Colors.dark_border,
            borderBottomWidth: error ? 1 : isFocused ? 1 : 0.4,
          },
        ]}>
        {leftIcon}
        <TextInput
          placeholderTextColor={colors.border}
          style={[
            styles.textInput,
            {
              ...textInputStyle,
              textAlignVertical: textTop ? 'top' : 'center',
              color: colors.text,
            },
          ]}
          secureTextEntry={password ? hideEyeIcon : false}
          autoCorrect={false}
          onFocus={() => {
            // onFocus();
            setIsFocused(true);
          }}
          maxLength={256}
          editable={!disabled}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {rightIcon}

        {password && (
          <Icon
            size={RFValue(12)}
            onPress={() => setHideEyeIcon(!hideEyeIcon)}
            name={hideEyeIcon ? 'eye-off' : 'eye'}
            style={styles.password}
            color={colors.text}
          />
        )}
      </View>

      {error && (
        <Text style={styles.errorText}>
          <Icon size={RFValue(13)} name="information-circle" /> {error}
        </Text>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputMainCOntainer: {
    marginVertical: 8,
  },
  errorText: {
    color: 'red',
    fontSize: RFValue(11),
    fontFamily: FONTS.Medium,
    marginBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: RFValue(9),
    fontFamily: FONTS.Medium,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  textInput: {
    fontFamily: FONTS.Regular,
    fontSize: RFValue(12),
    alignItems: 'flex-start',
    height: 28,
    width: '82%',
    paddingVertical: 5,
  },
  password: {
    textAlignVertical: 'center',
    opacity: 0.8,
  },
});
