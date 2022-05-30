import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Launch} from '../interfaces/launches'
import {Text} from './Text'

interface LaunchCellProps {
  data: Launch
}

export const LaunchCell = ({data}: LaunchCellProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rocket}>
        <Text style={styles.text}>{data.rocket.rocket_name}</Text>
        <Text style={styles.text}>{data.rocket.rocket.company}</Text>
      </View>
      <View style={styles.launch}>
        <Text style={styles.text}>{data.mission_name}</Text>
        <Text style={styles.text}>{data.launch_site.site_name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  rocket: {
    flex: 1,
  },
  launch: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    color: 'white',
  },
})
