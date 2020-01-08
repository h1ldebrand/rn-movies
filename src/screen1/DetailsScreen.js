import React from 'react'
import { SafeAreaView, Text, ScrollView, StyleSheet, View } from 'react-native'
import { Header, ImageBigCard } from '../components/uikit'
import Icon from 'react-native-vector-icons/FontAwesome';

export const DetailsScreen = ({ navigation }) => {
    const {image, name, summary} = navigation.state.params.show
    const { container, h1, h2, sub, wrapper } = styles

    return(
        <View style={container}>
            <Header title={name} 
                iconLeft="ios-arrow-back"
                colorLeft="#fff"
                onPressLeft={() => navigation.goBack()}
            />
            <ScrollView>
                <View style={sub}>
                    <ImageBigCard src={image.medium} />
                    <Text style={h1}>{name}</Text>
                    {summary && <Text style={h2}>{summary.replace(/(\<(\/?[^>]+)>)/g, '')}</Text>}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    sub: {
        flex: 1,
        marginBottom: 150,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    h1: {
        fontFamily: 'AvenirNext-Demibold',
        fontSize: 30,
        padding: 15,
        textAlign: 'center'
    },
    h2: {
        fontFamily: 'AvenirNext-Demibold',
        fontSize: 15,
        padding: 15,
        color: 'grey',
        textAlign: 'center'
    }
})
