import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';

function Feed() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.dark }}>
      <Header />
      {/* <Text style={{ color: Colors.primary, fontSize: 30, fontFamily: 'Nunito-Regular' }}>Feed</Text> */}
    </View>
  );
}

export default Feed;
