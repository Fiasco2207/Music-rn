import React from 'react';
import { Text, Image, View, _View, TouchableOpacity } from 'react-native';
import { Song } from '../../types';
import { Octicons } from '@expo/vector-icons';

import styles from './styles';

export type SongListItemProps = {

    song: Song
}

const SongListItem = (props: SongListItemProps) => {
const { song }=props; 
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                {/* <View style={styles.firstContainer}>
                    <Octicons name="kebab-vertical" size={26} color="white" />
                </View> */}
                <View style={styles.rightContainer} >
                     <Text style={styles.title} numberOfLines={1}>{song.title}</Text>
                     <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{uri: song.imageUri}} style={styles.image} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default SongListItem;