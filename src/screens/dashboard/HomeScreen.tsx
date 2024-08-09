import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View>
      <Text style={{color:'white', fontSize:32,}}>HomeScreen</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  )
}

export default HomeScreen