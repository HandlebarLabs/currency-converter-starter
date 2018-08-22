import React, { Component } from 'react';
import {
  FlatList, Text, StatusBar, View,
} from 'react-native';

import currencies from '../data/currencies';

class CurrencyList extends Component {
  handlePress = () => {
    console.log('row press');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

export default CurrencyList;
