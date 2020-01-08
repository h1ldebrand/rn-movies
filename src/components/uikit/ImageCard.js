import React from 'react'
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { width, height } from '../../constants'

export const ImageCard = ({src, title, onPress}) => {
    const {container, sub, h1, cover} = styles;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={container}>
                <View style={sub} >
                    { src && <Image style={cover} source={{uri: src.medium}} /> }
                </View>
                <Text style={h1}>{ title }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2.4,
        margin: 10
    },
    sub: {
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4
    },
    h1: {
        fontFamily: 'AvenirNext-Demibold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: width / 2.4
    },
    cover: {
        width: width / 2.4,
        height: width * 0.63,
        borderRadius: 10
    }
})
