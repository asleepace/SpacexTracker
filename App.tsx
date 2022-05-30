/**
 * SpaceX Tracker
 * Colin Teahan
 *
 * A simple application for tracking SpaceX shuttle launches.
 */

import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, useColorScheme} from 'react-native'
import {LaunchController} from './src/controllers'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <LaunchController />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})

export default App
