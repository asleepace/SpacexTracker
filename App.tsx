/**
 * SpaceX Tracker
 * Colin Teahan
 *
 * A simple application for tracking SpaceX shuttle launches.
 */

import React, {useEffect, useState} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native'
import {fetchLaunches} from './src/graphql'
import {Launch} from './src/interfaces'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [launches, setLaunches] = useState<Launch[]>([])

  useEffect(() => {
    fetchLaunches()
      .then(data => setLaunches(data))
      .catch(error => console.warn(error))
  }, [])

  console.log({launches})

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" />
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
