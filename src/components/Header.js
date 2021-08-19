import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'

function Header() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.appName}>The Art Shop</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.darker,
        height: 55,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    appName: {
        fontFamily: Fonts.NunitoRegular,
        color: Colors.primary,
        fontSize: 20,
    }
})

export default Header
