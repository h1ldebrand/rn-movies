import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { width } from '../../constants'

export const ImageBigCard = ({src}) => {
    const {container, sub, cover} = styles;

    return (
        <View style={container}>
            <View style={sub} >
                <Image
                    style={cover}
                    source={{uri: src}} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    sub: {
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4
    },
    cover: {
        width: width / 1.67,
        height: width * 0.9,
        borderRadius: 10
    }
})
