import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import BackButton from '../../components/global/BackButton';
import CenteredLogo from '../../components/global/CenteredLogo';
import CustomInput from '../../components/global/CustomInput';
import TouchableText from '../../components/auth/TouchableText';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../components/global/CustomButton';

const EmailScreen: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <CustomSafeAreaView>
      <BackButton />
      <CenteredLogo />
      <CustomInput
        label="EMAIL ADDRESS"
        returnKeyType="done"
        placeholder="Eg. me@example.com"
        onSubmitEditing={() => {
          console.log('HIT OTP API');
        }}
      />
      <CustomInput
        label="ENTER PASSWORD"
        returnKeyType="done"
        placeholder="8-20 Characters"
        onSubmitEditing={() => {
          console.log('HIT OTP API');
        }}
      />
      <CustomInput
        // label="ENTER PASSWORD"
        returnKeyType="done"
        placeholder="Enter OTP"
        rightIcon={
          <TouchableText
            firstText="Resend in 25s"
            onPress={() => {}}
            style={{fontSize: RFValue(9), marginTop: 0}}
          />
        }
        onSubmitEditing={() => {
          console.log('HIT OTP API');
        }}
      />
      <CustomInput
        label="ENTER OTP SEND TO THIS EMAIL"
        returnKeyType="done"
        placeholder="Enter OTP"
        rightIcon={
          <TouchableText
            firstText="Resend in 25s"
            onPress={() => {}}
            style={{fontSize: RFValue(9), marginTop: 0}}
          />
        }
        onSubmitEditing={() => {
          console.log('HIT OTP API');
        }}
      />

      <CustomButton
        title="NEXT"
        loading={loading}
        disabled={false}
        onPress={() => setLoading(!loading)}
      />
    </CustomSafeAreaView>
  );
};

export default EmailScreen;
