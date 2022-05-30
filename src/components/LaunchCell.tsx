import React, {useState} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Launch} from '../interfaces/launches'
import {Text} from './Text'

interface LaunchCellProps {
  data: Launch
}

export const LaunchCell = ({data}: LaunchCellProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
      {isExpanded ? (
        <LaunchCellExpanded data={data} />
      ) : (
        <LaunchCellCollapsed data={data} />
      )}
    </TouchableOpacity>
  )
}

/**
 * Launch Cell
 * This component displays data about a rocket and its upcoming launches, if the user
 * taps on this rocket then it will expand to show more details about the launch.
 */
const LaunchCellCollapsed = ({data}: LaunchCellProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rocket}>
        <Text type={'large'}>{data.rocket.rocket_name}</Text>
        <Text type={'small'}>{'ROCKET NAME'}</Text>
      </View>
      <View style={styles.launch}>
        <Text type={'large'}>{data.launch_site.site_name}</Text>
        <Text type={'small'}>{'LAUNCH SITE'}</Text>
      </View>
    </View>
  )
}

const LaunchCellExpanded = ({data}: LaunchCellProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rocket}>
        <Text type={'large'}>{data.rocket.rocket_name}</Text>
        <Text type={'small'}>{'ROCKET NAME'}</Text>
        <Text type={'large'} style={styles.margin}>
          {data.rocket.rocket.company}
        </Text>
        <Text type={'small'}>{'COMPANY NAME'}</Text>
        <Text type={'large'} style={styles.margin}>
          {data.rocket.mass}
        </Text>
        <Text type={'small'}>{'ROCKET MASS'}</Text>
      </View>
      <View style={styles.launch}>
        <Text type={'large'}>{data.launch_site.site_name}</Text>
        <Text type={'small'}>{'LAUNCH SITE'}</Text>
        <Text type={'large'} style={styles.margin}>
          {data.mission_name}
        </Text>
        <Text type={'small'}>{'MISSION NAME'}</Text>
        <Text type={'large'} style={styles.margin}>
          {data.mission_id[0]}
        </Text>
        <Text type={'small'}>{'MISSION ID'}</Text>
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
    backgroundColor: '#111',
    borderRadius: 8,
    marginBottom: 16,
    paddingTop: 8,
  },
  rocket: {
    flex: 1,
  },
  launch: {
    flex: 1,
    alignItems: 'flex-end',
  },
  margin: {
    marginTop: 8,
  },
})
