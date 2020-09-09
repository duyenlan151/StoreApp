import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CategoryListItem from './components/CategoryListItem';

import Pharmacy from './assets/pharmacy.png';
import Soap from './assets/soap.png';
import Bath from './assets/bath.png';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title='Thực phẩm chức năng' image={Pharmacy} />
      <CategoryListItem title='Sữa tắm' image={Bath} />
      <CategoryListItem title='Dầu gội' image={Soap} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
