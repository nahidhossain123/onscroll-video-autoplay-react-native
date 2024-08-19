/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FlashList } from "@shopify/flash-list";
import Video from 'react-native-video';
import VideoFeed from './src/component/VideoFeed';

const DATA = [
  {
    id:1,
    title: "First Item",
    src: require('./src/media/video1.mp4')
  },
  {
    id:2,
    title: "Second Item",
    src: require('./src/media/video2.mp4')
  },
  {
    id:3,
    title: "Second Item",
    src: require('./src/media/video3.mp4')
  },
  {
    id:4,
    title: "Second Item",
    src: require('./src/media/video4.mp4')
  },
  {
    id:5,
    title: "Second Item",
    src: require('./src/media/video5.mp4')
  },
  {
    id:6,
    title: "Second Item",
    src: require('./src/media/video6.mp4')
  },
];



function App(): React.JSX.Element {
  const {height,width} = Dimensions.get('window');
  const [scroll,setScroll] = useState('')
  const [viewAbaleItem, setViewAbleItem] = useState(0);
  console.log('scroll',scroll)
  

  const onViewableItems = useCallback(({ viewableItems }) => {
    console.log('viewableItems', viewableItems);
    // if (currentPage / 2 < viewableItems[viewableItems.length - 1]?.index && currentPage>viewableItems[viewableItems.length - 1]?.index) {
    //   if (!isEnd && !isCallingApi) {
    //     setMoreFeedLoading(true);
    //     isListScrolling = false;
    //     getFeedItems(20)
    //   }
    // }
    setViewAbleItem(viewableItems[0]?.index);
  },[])
  console.log('ViewableItems22',viewAbaleItem)

  const onLayout = (itemId, event) => {
    const { y, height } = event.nativeEvent.layout;
    console.log('Onlayout',y,height)
    //itemLayoutRefs.current[itemId] = { y, height };
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
      />
      <VideoFeed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
