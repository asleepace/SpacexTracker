import React from 'react'
import {Image, TouchableOpacity} from 'react-native'

interface SpacexLogoProps {
  onPress(): void
}

/**
 * Displays the SpaceX logo which can trigger an action when pressed.
 * The image a bit off-center, so a marginLeft is added.
 */
export const SpacexLogo = ({onPress}: SpacexLogoProps) => (
  <TouchableOpacity onPress={() => onPress()}>
    <Image
      source={require('../../assets/logo.png')}
      style={{marginLeft: 20, height: 30, width: '100%'}}
      resizeMode={'contain'}
    />
  </TouchableOpacity>
)
