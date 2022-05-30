import React from 'react'
import {
  StyleSheet,
  Text as BaseText,
  TextProps as BaseTextProps,
} from 'react-native'

interface TextProps extends BaseTextProps {
  type?: 'small' | 'medium' | 'large'
}

export const Text = (props: TextProps) => {
  return <BaseText style={props.style}>{props.children}</BaseText>
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  small: {
    fontSize: 14,
  },
  medium: {
    fontSize: 18,
  },
  large: {
    fontSize: 22,
  },
})
