import type {Launch, LaunchResponse} from '../interfaces'
import {fetchGraphQL} from './fetchGraphQL'
import {queryLaunches} from './launches'

/**
 * This method combines the generic fetchGraphQL request with the query
 * for fetching launches.
 */
export const fetchLaunches = () =>
  fetchGraphQL(queryLaunches)
    .then(parseLaunchData)
    .then(data => {
      console.log(data.map(item => item.uniqueKey))

      return data
    })

/**
 * Parses the raw launch data into a more readable and TypeScript friendly
 * manner, this way we only need to handle edge cases such as undefined
 * missionIds once.
 */
const parseLaunchData = (data: LaunchResponse): Launch[] => {
  return data.launches.map(raw => {
    const launchDate = new Date(raw.launch_date_local)
    const launchSite = raw.launch_site.site_name
    const missionId = raw.mission_id[0] || 'NONE'
    const uniqueKey = `${launchSite}_${+launchDate}`.replace(/[\W_]+/g, ' ')
    return {
      missionName: raw.mission_name,
      rocketName: raw.rocket.rocket_name,
      rocketCompany: raw.rocket.rocket.company,
      rocketMass: raw.rocket.rocket.mass.kg,
      launchSite,
      launchDate,
      missionId,
      uniqueKey,
    }
  })
}
