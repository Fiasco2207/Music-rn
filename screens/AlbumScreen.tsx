import { NavigationProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
const AlbumScreen = (props: {}) => {
  
    const route = useRoute();
    const albumId = route.params.id;
    useEffect( () => {
      console.log(route);
    }, [])

 return (
  <LinearGradient colors={['#8400ff', '#2d067c', '#020024']}>
    <View>
        <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
    </LinearGradient>
 )
}

export default AlbumScreen;