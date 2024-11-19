import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator, MD2Colors, Text } from 'react-native-paper'

export const LoadingComponent = () => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
          <Text style={{ fontStyle: 'italic' }}>Cargando...</Text>
      </View>
  )
}
