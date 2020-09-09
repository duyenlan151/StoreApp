import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import CategoryListItem from './components/CategoryListItem';

import Pharmacy from './assets/pharmacy.png';
import Soap from './assets/soap.png';
import Bath from './assets/bath.png';

export default function App() {
  const [categories, setCategories] = useState([
    { id: 1, title: 'Thực phẩm chức năng', imageUrl: Pharmacy },
    { id: 2, title: 'Sữa tắm', imageUrl: Soap },
    { id: 3, title: 'Dầu gội', imageUrl: Bath },
    { id: 4, title: 'Thực phẩm chức năng', imageUrl: Pharmacy },
    { id: 5, title: 'Sữa tắm', imageUrl: Soap },
    { id: 6, title: 'Dầu gội', imageUrl: Bath },
    { id: 7, title: 'Sữa tắm', imageUrl: Soap },
    { id: 8, title: 'Dầu gội', imageUrl: Bath },
  ])

  return (
    <View style={{ backgroundColor: '#eee' }}>
      {/* <Text>Linear Shop</Text> */}
      <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
        {/* {categories.map(category => (
          <CategoryListItem key={category.id} category={category} />
        ))} */}

        {/* user flatList */}
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryListItem category={item} />}
          keyExtractor={item => `${item.id}`}
        />
      </ScrollView>
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
