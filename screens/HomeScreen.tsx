import * as React from 'react';
import { FlatList, StyleSheet, View, StatusBar, Text, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

import { API, graphqlOperation } from 'aws-amplify';

import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';

import { listAlbumCategorys } from '../src/graphql/queries';
import PlayerWidget from '../components/PlayerWidget';


export default function HomeScreen() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        setCategories(data.data.listAlbumCategorys.items);
      } catch (e) {
        console.log(e);
      }
    }

    fetchAlbumCategories();
  }, []);

  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12)
    greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';

  return (
    <ScrollView>
      <View style={styles.container}>
        <LinearGradient colors={['#8400ff', '#2d067c', '#020024']}>
          <StatusBar backgroundColor={"black"} />
          <View style={{ marginTop: 50 }} >
            <Text style={{ color: "white", fontSize: 30, alignSelf: "center", fontWeight: "bold", fontFamily: "notoserif" }}>{greet}</Text>
          </View>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <AlbumCategory
                title={item.title}
                albums={item.albums.items}
              />
            )}
            keyExtractor={(item) => item.id}
            style={{ marginTop: 10 }}
          />
        </LinearGradient>
      </View>
    </ScrollView>
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

