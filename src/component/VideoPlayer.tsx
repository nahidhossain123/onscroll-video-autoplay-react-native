import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Video from 'react-native-video'

export default function VideoPlayer({item,playingVideoId}) {
    return (
        <View
            style={styles.item}
        >

            <Video
                source={item.src}
                style={styles.video}
                paused={item.id !== playingVideoId} // Autoplay if videoId matches
                resizeMode="cover"
                repeat
            />
            <Text>{item.title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 20,
    },
    video: {
        width: '100%',
        height: 400,
    },
});