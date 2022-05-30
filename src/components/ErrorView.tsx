import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Text} from './Text'

interface ErrorViewProps {
  onReload(): void
  error?: Error
}

export const ErrorView = ({onReload, error}: ErrorViewProps) => {
  const errorMessage = error?.message ?? 'There was an error loading the data!'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Uh oh!'}</Text>
      <Text>{error?.message}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onReload()}>
        <Text>{'RELOAD'}</Text>
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
    fontWeight: 'bold',
    marginBottom: 16,
    fontSize: 18,
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
