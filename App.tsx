/**
 * SpaceX Tracker
 * Colin Teahan
 *
 * A simple application for tracking SpaceX shuttle launches.
 */

import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
