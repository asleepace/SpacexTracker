import React from 'react'
import {Image} from 'react-native'

export const SpacexLogo = () => (
  <Image
    source={require('../../assets/logo.png')}
    style={{height: 40, width: '100%'}}
    resizeMode={'contain'}
  />
)
