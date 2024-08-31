import React, { useState, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import Video from 'react-native-video';

const { height: screenHeight } = Dimensions.get('window');

const VideoFeed = () => {
    const [playingVideoId, setPlayingVideoId] = useState(null);
    const itemLayoutRefs = useRef({});

    // Callback to handle changes in visible items
    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        // Find the video item that's closest to the center of the screen
        const centerItem = findCenteredItem(viewableItems.map(viewable => viewable.item));
        setPlayingVideoId(centerItem?.id || null);
    }, []);

    // Find the video item closest to the center of the screen
    const findCenteredItem = (items) => {
        const centerPosition = screenHeight / 2;

        return items.reduce((closestItem, item) => {
            const itemLayout = itemLayoutRefs.current[item.id];
            if (!itemLayout) return closestItem;

            const itemCenterY = itemLayout.y + itemLayout.height / 2;
            const distance = Math.abs(centerPosition - itemCenterY);

            return distance < (closestItem?.distance || Infinity)
                ? { ...item, distance }
                : closestItem;
        }, null);
    };

    // Store the layout of each item
    const onLayout = (itemId, event) => {
        const { y, height } = event.nativeEvent.layout;
        itemLayoutRefs.current[itemId] = { y, height };
    };

    return (
        <View style={styles.container}>
            <FlashList
                data={DATA} // Your data array
                estimatedItemSize={400}
                extraData={playingVideoId}
                renderItem={({ item, index, target, extraData }) => (
                    <View
                        style={styles.item}
                        onLayout={(event) => onLayout(item.id, event)}
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
                )}
                keyExtractor={item => item.id}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        marginBottom: 20,
    },
    video: {
        width: '100%',
        height: 400,
    },
    centeredItemContainer: {
        marginTop: 20,
    },
});

// Sample data with video URLs
const DATA = [
    {
        id: 1,
        title: "First Item",
        src: require('../media/video1.mp4')
    },
    {
        id: 2,
        title: "Second Item",
        src: require('../media/video2.mp4')
    },
    {
        id: 3,
        title: "Second Item",
        src: require('../media/video3.mp4')
    },
    {
        id: 4,
        title: "Second Item",
        src: require('../media/video4.mp4')
    },
    {
        id: 5,
        title: "Second Item",
        src: require('../media/video5.mp4')
    },
    {
        id: 6,
        title: "Second Item",
        src: require('../media/video6.mp4')
    },
];

export default VideoFeed;
