import React from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BLUE, width } from '../../constants'

export const SearchBar = props => {
    const {title, iconRight,colorRight, onPressRight, onChangeText, placeholder, value, onBlur} = props
    const { container, sub, iconRightStyle, inputStyle, searchStyle } = styles

    return (
      <View style={container}>
          <View style={sub}>
            <TextInput
              style={inputStyle}
              onChangeText={onChangeText}
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
            />
            {
              iconRight
              &&
              <TouchableOpacity onPress={onPressRight}>
                <View style={searchStyle}>
                  <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, {color: colorRight}]} />
                </View>
              </TouchableOpacity> 
            }
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: "#30d0fe",
      height: 96,
      justifyContent: 'center',
      paddingLeft: 22,
      paddingTop: 31,
      paddingHorizontal: 20,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    sub: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: width - 35,
      backgroundColor: '#fff',
      height: 40,
      borderRadius: 20,
      overflow: 'hidden'
    },
    inputStyle: {
      fontSize: 18,
      height: '100%',
      width: width - 90,
      marginLeft: 15,
      backgroundColor: '#fff'
    },
    searchStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      height: 40,
      width: 40,
      borderRadius: 20
    },
    iconRightStyle: {
      fontSize: 30,
      marginTop: 2
    },
  });
  