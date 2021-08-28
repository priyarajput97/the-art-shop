import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Colors from '../../constants/Colors';

function Feed() {
  return (
    <ScrollView style={{ backgroundColor: Colors.dark }}>
      <Header />
      <Post />
      <Post />
    </ScrollView>
  );
}

export default Feed;
