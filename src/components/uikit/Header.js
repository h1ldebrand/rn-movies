import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Header = ({title, leftIcon, leftColor, onPress}) => {
    const { viewStyle, textStyle, leftButtonStyle } = styles

    return (
      <View style={viewStyle}>
          <TouchableOpacity onPress={onPress}>
            <Ionicons name={leftIcon} style={leftButtonStyle} color={leftColor} />
          </TouchableOpacity>
          <Text style={textStyle}>{ title }</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
      flexDirection: 'row',
      backgroundColor: "#30d0fe",
      height: 96,
      justifyContent: 'flex-start',
      paddingLeft: 22,
      paddingTop: 31,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      color: '#fff',
      fontSize: 28,
      fontFamily: "AvenirNext-DemiBold"
    },
    leftButtonStyle: {
        fontSize: 38,
        paddingRight: 20
    }
  });
  