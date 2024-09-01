import { View, Text } from 'react-native'
import React from 'react'
import VideoPlayer from './VideoPlayer'
import VideoDetails from './VideoDetails'

export default function ItemRenderer({item,playingVideoId}) {
  return (
    <View>
      <VideoPlayer item={item} playingVideoId={playingVideoId} />
      <VideoDetails />
    </View>
  )
}