import React from 'react'
import {
  StyleSheet,
  Text as BaseText,
  TextProps as BaseTextProps,
} from 'react-native'
import {System} from '../utils'

/**
 * Extends the normal TextProps with a type attribute that is used to set
 * default styling for the text.
 */
interface TextProps extends BaseTextProps {
  type?: 'small' | 'large'
}

/**
 * Wrapper around the native text component which allows us to standardize
 * our text across the application and make changes to the styling quickly.
 * Provides two default types which are "small" and "large"
 */
export const Text = (props: TextProps) => {
  const styleType = props.type === 'small' ? styles.small : styles.large
  return (
    <BaseText style={[styleType, props.style]} dataDetectorType={'all'}>
      {props.children}
    </BaseText>
  )
}

const styles = StyleSheet.create({
  text: {
    color: System.color,
  },
  small: {
    fontSize: System.unit * 1.25,
    fontWeight: System.fontWeight,
    color: System.foregroundLight,
  },
  large: {
    fontSize: System.unit * 2,
    fontWeight: System.fontWeight,
    color: System.color,
  },
})
