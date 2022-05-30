import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import {Text} from './Text'

/**
 * A simple component which displays something is loading.
 */
export const LoadingView = () => (
  <View style={styles.container}>
    <Text style={styles.message}>{'Loading ...'}</Text>
    <ActivityIndicator size={'small'} color={'white'} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  message: {
    fontSize: 18,
    marginBottom: 16,
  },
})
