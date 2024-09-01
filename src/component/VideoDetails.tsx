import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import { ItemType } from './VideoFeed'

type VideoDetailsType = {
  item: ItemType
}

export default function VideoDetails({ item }: VideoDetailsType) {
  return (
    <View style={style.container}>
      <View style={style.details}>
        <Avatar item={item} />
        <View style={style.title}>
          <Text style={style.titleText}>{item.title}</Text>
          <View style={style.subTitleContainer}>
            <Text style={style.subTitle}>{item.user.name} . {item.views} Views . {item.createdAt}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop:10,
    marginBottom:20,
    paddingHorizontal:10
  },
  details: {
    flexDirection: 'row',
  },
  title:{
    flex:1,
    marginLeft:10,
  },
  titleText: {
    fontSize:18,
    fontWeight:'bold',
  },
  subTitleContainer:
  {
    flexDirection:'row',
    alignContent:'center',
    

  },
  subTitle:
  {
    fontSize:14,
  }
})