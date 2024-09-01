import React, { useState, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, LayoutChangeEvent } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import Video from 'react-native-video';
import VideoPlayer from './VideoPlayer';
import ItemRenderer from './ItemRenderer';

const { height: screenHeight } = Dimensions.get('window');
type UserType = {
    name:string
}
type ItemType = {
    id: string,
    user: UserType,
    title: string,
    src: string,
    createdAt: string,
    views: number,
    distance:number
}

const VideoFeed = () => {
    const [playingVideoId, setPlayingVideoId] = useState<string|null>('');
    const itemLayoutRefs = useRef<(string|null)[]>(['']);

    // Callback to handle changes in visible items
    const onViewableItemsChanged = useCallback(({ viewableItems }:{
        viewableItems: Array<{ item: ItemType, key: string, isViewable: boolean }>;
        changed: Array<{ item: ItemType, key: string, isViewable: boolean }>;
      }) => {
        // Find the video item that's closest to the center of the screen
        const centerItem = findCenteredItem(viewableItems.map(viewable => viewable.item));
        setPlayingVideoId(centerItem?.id || null);
    }, []);

    // Find the video item closest to the center of the screen
    const findCenteredItem = (items:ItemType[]) => {
        console.log("FindCenterItem",items)
        const centerPosition = screenHeight / 2;

        return items.reduce((closestItem:ItemType|null, item:ItemType) => {
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
    const onLayout = (itemId:string, event:LayoutChangeEvent) => {
        const { y, height } = event.nativeEvent.layout;
        itemLayoutRefs.current[itemId] = { y, height };
    };

    return (
        <View style={styles.container}>
            <StatusBar
            />
            <FlashList
                data={DATA}
                estimatedItemSize={400}
                extraData={playingVideoId}
                renderItem={({ item, index, target, extraData }) => (
                    <View onLayout={(event) => onLayout(item.id, event)}>
                        <ItemRenderer item={item} playingVideoId={playingVideoId} />
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
        id: '1',
        user: { name: 'Nahid Hossain' },
        title: "Rainy Day | 2024 | trending",
        src: require('../media/video1.mp4'),
        createdAt: '',
        views: 500
    },
    {
        id: '1',
        user: { name: 'Nahid Hossain' },
        title: "Rainy Day | 2024 | trending",
        src: require('../media/video2.mp4'),
        createdAt: '',
        views: 500
    },
    {
        id: '1',
        user: { name: 'Nahid Hossain' },
        title: "Rainy Day | 2024 | trending",
        src: require('../media/video3.mp4'),
        createdAt: '',
        views: 500
    },
    {
        id: '1',
        user: { name: 'Nahid Hossain' },
        title: "Rainy Day | 2024 | trending",
        src: require('../media/video4.mp4'),
        createdAt: '',
        views: 500
    },
    {
        id: '1',
        user: { name: 'Nahid Hossain' },
        title: "Rainy Day | 2024 | trending",
        src: require('../media/video5.mp4'),
        createdAt: '',
        views: 500
    },
    {
        id: '1',
        user: { name: 'Nahid Hossain' },
        title: "Rainy Day | 2024 | trending",
        src: require('../media/video6.mp4'),
        createdAt: '',
        views: 500
    },
   
];

export default VideoFeed;
