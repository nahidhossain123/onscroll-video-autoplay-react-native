import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FeedEnd() {
  return (
    <View style={style.container}>
      <Text style={style.description}>You'r Are All Caught Of For Now</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        marginTop:100,
        paddingBottom:40
    },
    description:{
        fontSize:18,
        textAlign:'center'
    }
})