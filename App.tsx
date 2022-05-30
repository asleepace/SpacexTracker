/**
 * SpaceX Tracker
 * Colin Teahan
 *
 * A simple application for tracking SpaceX shuttle launches.
 */

import React from 'react'
import {ScreenContainer, SpacexLogo} from './src/components'
import {
  AboutMeController,
  AboutMeHandle,
  LaunchController,
} from './src/controllers'

const App = () => {
  /* show about me modal when the user taps on the spacex logo */
  const aboutMeRef = React.createRef<AboutMeHandle>()

  return (
    <ScreenContainer>
      <SpacexLogo onPress={() => aboutMeRef.current?.show()} />
      <AboutMeController ref={aboutMeRef} />
      <LaunchController />
    </ScreenContainer>
  )
}

export default App
