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
import {LaunchCell} from './src/components/'
import {SearchBar} from './src/components/SearchBar'
import {fetchLaunches} from './src/graphql'
import {Launch} from './src/interfaces'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const [launches, setLaunches] = useState<Launch[]>([])
  const [filtered, setFiltered] = useState<Launch[]>([])
  const [search, setSearch] = useState<string>()

  useEffect(() => {
    fetchLaunches()
      .then(data => setLaunches(data))
      .catch(error => console.warn(error))
  }, [])

  useEffect(() => {
    if (!search) {
      setFiltered([])
      return
    }
    const searchTerm = search?.toLowerCase()
    const output = launches.filter(data => {
      const rocketName = data.rocket.rocket_name.toLowerCase()
      const launchSite = data.launch_site.site_name.toLowerCase()
      return rocketName.includes(searchTerm) || launchSite.includes(searchTerm)
    })

    setFiltered(output)
  }, [search, launches])

  const searchTerm = search ? search.toLowerCase() : ''

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SearchBar onSearch={setSearch} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {launches
          .filter(data => {
            const rocketName = data.rocket.rocket_name.toLowerCase()
            const launchSite = data.launch_site.site_name.toLowerCase()
            return (
              rocketName.includes(searchTerm) || launchSite.includes(searchTerm)
            )
          })
          .map(data => {
            return <LaunchCell data={data} />
          })}
      </ScrollView>
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
