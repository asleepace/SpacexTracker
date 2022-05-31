import React from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native'
import {System} from '../utils'

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
      style={styles.logo}
      resizeMode={'contain'}
    />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  logo: {
    marginVertical: System.unit * 2,
    marginLeft: 20,
    height: System.unit * 4,
    width: '100%',
  },
})
