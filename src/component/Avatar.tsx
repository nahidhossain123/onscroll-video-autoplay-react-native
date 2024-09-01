import { View, Text, Image } from 'react-native'
import React from 'react'
import { getNameInitials } from '../utils/CommonFunctions';
import { ItemType } from './VideoFeed';

type AvatarType={
  item:ItemType
}

export default function Avatar({ item }:AvatarType) {
  const nameInittials = getNameInitials(item.user.name);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: '#000',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {item.user.image ? (
          <Image source={{ uri: item.user.image }} />
        ) : (
          <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#FFF' }}>
            {nameInittials}
          </Text>
        )}
      </View>
    </View>
  )
}