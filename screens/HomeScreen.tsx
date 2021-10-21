import * as React from 'react';
import { FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native';


import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <LinearGradient colors={['#8400ff', '#2d067c', '#020024']}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory 
            title={item.title}
            albums={item.albums}
            keyExtractor={(item) => item.id}
          />
        )}
        style={{marginTop: 10}}
      />
    </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30, 
    height: 1,
    width: '80%'
  }
});

