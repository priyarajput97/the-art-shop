import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../constants/Colors';

function UploadPost() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.dark, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: Colors.primary, fontSize: 30, fontFamily: 'Nunito-Regular' }}>Upload Post</Text>
    </View>
  );
}

export default UploadPost;
