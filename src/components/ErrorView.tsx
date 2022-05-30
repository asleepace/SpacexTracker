import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Text} from './Text'

interface ErrorViewProps {
  onReload(): void
  error?: Error
}

/**
 * Displays an error message along with a button that allows the user to
 * reload the data.
 */
export const ErrorView = ({onReload, error}: ErrorViewProps) => {
  const errorMessage = error?.message || 'There was an error loading the data!'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Uh oh!'}</Text>
      <Text style={[styles.detail, styles.spacer]}>{errorMessage}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onReload()}>
        <Text style={styles.detail}>{'RELOAD'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  detail: {
    fontSize: 16,
    color: 'white',
  },
  spacer: {
    paddingVertical: 32,
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 16,
  },
})
