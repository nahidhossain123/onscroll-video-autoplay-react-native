import { View, Text, Image } from 'react-native'
import React from 'react'
import { getNameInitials } from '../utils/CommonFunctions';

export default function Avatar({ item }) {
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
      {item.isName && (
        <Text style={{ color: '#000', marginLeft: 10 }}>{item.user.name}</Text>
      )}
    </View>
  )
}