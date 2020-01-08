import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BLUE } from '../../constants'

export const Header = props => {
    const {title, iconLeft, iconRight, colorLeft, colorRight, headerColor, onPressLeft, onPressRight} = props
    const { container, textStyle, iconLeftStyle, iconRightStyle } = styles

    return (
      <View style={container}>
          {
            iconLeft 
            &&
            <TouchableOpacity onPress={onPressLeft}>
              <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft} />
            </TouchableOpacity> 
          }
          <Text style={textStyle}>{ title }</Text>
          {
            iconRight
            &&
            <TouchableOpacity onPress={onPressRight}>
              <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, {color: colorRight}]} />
            </TouchableOpacity> 
          }
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: "#30d0fe",
      height: 96,
      justifyContent: 'space-between',
      paddingLeft: 22,
      paddingTop: 31,
      paddingHorizontal: 20,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      color: '#fff',
      fontSize: 28,
      fontFamily: "AvenirNext-DemiBold",
      marginRight: 'auto',
      marginLeft: 20
    },
    iconLeftStyle: {
      fontSize: 35
    },
    iconRightStyle: {
      fontSize: 30,
      marginRight: 3
    },
  });
  