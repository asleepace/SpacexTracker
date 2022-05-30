/**
 * SpaceX Tracker
 * Colin Teahan
 *
 * A simple application for tracking SpaceX shuttle launches.
 */

import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import {SpacexLogo} from './src/components'
import {LaunchController} from './src/controllers'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SpacexLogo />
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
