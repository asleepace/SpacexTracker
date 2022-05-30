import React, {useState} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import type {Launch} from '../interfaces'
import {LabeledText} from './LabeledText'

interface LaunchCellProps {
  data: Launch
}

/**
 * Displays a collapsed cell of launch data which includes the rocket name and
 * launch site. When tapped this will expand to show the rest of the launch
 * details until tapped again.
 */
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
 * Launch Cell (Collapsed)
 * This component displays data about a rocket and its upcoming launches, if the user
 * taps on this rocket then it will expand to show more details about the launch.
 */
const LaunchCellCollapsed = ({data}: LaunchCellProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rocket}>
        <LabeledText label={'rocket name'} text={data.rocketName} />
      </View>
      <View style={styles.launch}>
        <LabeledText
          label={'launch site'}
          text={data.launchSite}
          align={'right'}
        />
      </View>
    </View>
  )
}

/**
 * Launch Cell (Expanded)
 * Displays all of the launches data including the rocket name, company, mass, launch
 * site, mission name, mission id, and localized date and time.
 */
const LaunchCellExpanded = ({data}: LaunchCellProps) => {
  // @TODO: move this into the parseGraphQL step
  const localizedDate = data.launchDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const localizedTime = data.launchDate.toLocaleTimeString()
  return (
    <View style={styles.container}>
      <View style={styles.rocket}>
        <LabeledText label={'rocket name'} text={data.rocketName} />
        <LabeledText label={'rocket company'} text={data.rocketCompany} />
        <LabeledText label={'rocket mass'} text={`${data.rocketMass} KG`} />
        <LabeledText label={'launch date'} text={localizedDate} />
      </View>
      <View style={styles.launch}>
        <LabeledText
          label={'launch site'}
          text={data.launchSite}
          align={'right'}
        />
        <LabeledText
          label={'mission name'}
          text={data.missionName}
          align={'right'}
        />
        <LabeledText
          label={'mission id'}
          text={data.missionId}
          align={'right'}
        />
        <LabeledText
          label={'launch time'}
          text={localizedTime}
          align={'right'}
        />
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
