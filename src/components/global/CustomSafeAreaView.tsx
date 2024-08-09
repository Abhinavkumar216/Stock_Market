import {View, Text, SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';

interface CustomSafeAreaViewProps {
  children: ReactNode;
}

const CustomSafeAreaView: FC<CustomSafeAreaViewProps> = ({children}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  } as ViewStyle,
});
