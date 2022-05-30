import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Text} from './Text'

interface ErrorMessageProps {
  onReload(): void
  error?: Error
}

export const ErrorMessage = ({onReload, error}: ErrorMessageProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{'Uh oh!'}</Text>
    <Text>
      {
        'There was an error loading the data, please check your internet connection!'
      }
    </Text>
    <Text>{error?.message}</Text>
    <TouchableOpacity style={styles.button} onPress={() => onReload()}>
      <Text>{'RELOAD'}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})
