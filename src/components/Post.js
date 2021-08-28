import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'

const uri = 'https://d2culxnxbccemt.cloudfront.net/craft/content/uploads/2015/04/20181732/5029-Seascapes-018_5029-1.jpg';

function Post() {
    return (
        <View style={styles.postWrapper}>
            <View style={styles.userWrapper}>
                <Image source={{ uri: 'https://i.pinimg.com/originals/db/00/ab/db00abcf6c5909bf4763f8c30fbe1701.jpg' }} style={styles.userAvatar} />
                <Text style={styles.usernameText}>thecraftcrave</Text>
            </View>
            <View style={styles.postImageWrapper}>
                <Image source={{ uri }} style={styles.postImage} />
            </View>
            <View style={styles.actionWrapper}>
                <Icon name='heart' size={30} color={Colors.primary} style={styles.icon} />
                <Icon name='cart-outline' size={30} color={Colors.light} style={styles.icon} />
                <Icon name='chat-outline' size={30} color={Colors.light} style={styles.icon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postWrapper: {
        paddingVertical: 10,
    },
    userWrapper: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
        resizeMode: 'cover'
    },
    usernameText: {
        marginLeft: 10,
        color: Colors.light,
        fontSize: 20,
        fontFamily: Fonts.NunitoRegular
    },
    postImageWrapper: {
        // paddingBottom: 15
    },
    postImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width - 20,
        resizeMode: 'cover',
    },
    actionWrapper: {
        padding: 10,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 15
    }
})

export default Post
