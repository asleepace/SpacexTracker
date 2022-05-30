/**
 * SpaceX Tracker
 * Colin Teahan
 *
 * A simple application for tracking SpaceX shuttle launches.
 */

import React, {useCallback} from 'react'
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import {SpacexLogo} from './src/components'
import {
  AboutMeController,
  AboutMeHandle,
  LaunchController,
} from './src/controllers'

const App = () => {
  /* show about me modal when the user taps on the spacex logo */
  const aboutMeRef = React.createRef<AboutMeHandle>()
  const showAboutMe = useCallback(() => {
    aboutMeRef.current?.show()
  }, [aboutMeRef])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SpacexLogo onPress={showAboutMe} />
      <AboutMeController ref={aboutMeRef} />
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
