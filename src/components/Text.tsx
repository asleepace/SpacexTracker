import React from 'react'
import {
  StyleSheet,
  Text as BaseText,
  TextProps as BaseTextProps,
} from 'react-native'

interface TextProps extends BaseTextProps {
  type?: 'small' | 'large'
}

export const Text = (props: TextProps) => {
  const styleType = props.type === 'small' ? styles.small : styles.large
  return <BaseText style={[styleType, props.style]}>{props.children}</BaseText>
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  small: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#888',
  },
  large: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
})
