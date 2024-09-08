import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import VideoPlayer from './VideoPlayer'
import VideoDetails from './VideoDetails'
import { ItemType } from './VideoFeed'

type RenderItemType = {
  item:ItemType,
  playingVideoId:number|null|undefined
}

export default function ItemRenderer({item,playingVideoId}:RenderItemType) {
  return (
    <View>
      <View style={{height: 400,}}>
      {/* <VideoPlayer item={item} playingVideoId={playingVideoId} /> */}
      </View>
      <VideoDetails item={item} />
    </View>
  )
}

const style = StyleSheet.create({
  
})