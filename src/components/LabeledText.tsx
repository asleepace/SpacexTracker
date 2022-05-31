import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Text} from './Text'

interface LabeledTextProps {
  label?: string
  text?: string
  align?: 'left' | 'right'
}

/**
 * A simple component for displayed text with a corresponding label that appears
 * underneath. Takes an optional parameter to set the alignment to either the
 * left or right.
 */
export const LabeledText = ({label, text, align}: LabeledTextProps) => {
  const alignStyle = align === 'right' && styles.rightAlign
  return (
    <View style={[styles.container, alignStyle]}>
      <Text type={'large'} style={styles.margin}>
        {text}
      </Text>
      <Text type={'small'}>{label?.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  leftAlign: {
    alignItems: 'flex-start',
  },
  rightAlign: {
    alignItems: 'flex-end',
  },
  container: {
    marginBottom: 8,
  },
  margin: {
    marginTop: 8,
  },
})
