import React from 'react';
import { Text, Image, View, _View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import { Song } from '../../types';

import styles from './styles';

const song = {
    id: '1',
    imageUri: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Baby_Doll_Cover_Art.jpeg',
    title: 'Baby doll',
    artist: 'Sunny leone',
}

const PlayerWidget = () => {
    return(
    <View style={styles.container}>
        <Image source={{uri: song.imageUri}} style={styles.image} />
    <View style={styles.rightContainer} >  
        <View style={styles.nameContainer}> 
            <Text style={styles.title }>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer} >
            <AntDesign name="hearto" size={30} color={"white"} style={{marginRight: 30}}/>
            <FontAwesome name="play" size={30} color={"white"} style={{marginRight: 20}} />
        </View>
    </View>
    </View>
)
}
export default PlayerWidget;