/**
 * SpaceX Tracker
 * Colin Teahan
 *
 * A simple application for tracking SpaceX shuttle launches.
 */

import React, {useEffect} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native'
import {fetchLaunches} from './src/graphql'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    fetchLaunches()
      .then(response => console.log(response))
      .catch(error => console.warn(error))
  }, [])

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
