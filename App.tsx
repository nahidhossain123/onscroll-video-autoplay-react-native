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
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
