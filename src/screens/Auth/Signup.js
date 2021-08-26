import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import Colors from '../../constants/Colors'

const Signup = (props) => {

    const signup = () => {
        try {
            props.navigation.navigate('Feed')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput placeholder='Email' placeholderTextColor={Colors.primaryLight} style={styles.textInput} />
            <TextInput placeholder='Password' placeholderTextColor={Colors.primaryLight} style={styles.textInput} />
            <TextInput placeholder='Re-Password' placeholderTextColor={Colors.primaryLight} style={styles.textInput} />
            <Button title='Sign Up' color={Colors.primary} onPress={signup} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: 300,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        marginBottom: 20
    },
})

export default Signup
