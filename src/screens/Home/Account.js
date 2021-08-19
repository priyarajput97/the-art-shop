import React from 'react';
import {Text, View} from 'react-native';
import Colors from '../../constants/Colors';

function Account() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.dark, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: Colors.primary, fontSize: 30, fontFamily: 'Nunito-Regular' }}>Account</Text>
    </View>
  );
}

export default Account;
