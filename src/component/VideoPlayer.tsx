import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import { ItemType } from './VideoFeed'

type VideoPlayerPropsType = {
    item: ItemType,
    playingVideoId: number | null | undefined
}

export default function VideoPlayer({ item, playingVideoId }: VideoPlayerPropsType) {
    return (
        <View
            style={styles.Container}
        >
            <Video
                source={{ uri: item.src }}
                style={styles.video}
                paused={item.id !== playingVideoId} // Autoplay if videoId matches
                repeat
                resizeMode='cover'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    video: {
        width: '100%',
        height: 400,
    },
});