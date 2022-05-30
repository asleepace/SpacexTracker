import React from 'react'
import {Image, TouchableOpacity} from 'react-native'

interface SpacexLogoProps {
  onPress(): void
}

export const SpacexLogo = ({onPress}: SpacexLogoProps) => (
  <TouchableOpacity onPress={() => onPress()}>
    <Image
      source={require('../../assets/logo.png')}
      style={{height: 40, width: '100%'}}
      resizeMode={'contain'}
    />
  </TouchableOpacity>
)
