import type {Launch, LaunchResponse} from '../interfaces'
import {fetchGraphQL} from './fetchGraphQL'
import {queryLaunches} from './launches'

/**
 * This method combines the generic fetchGraphQL request with the query
 * for fetching launches.
 */
export const fetchLaunches = () =>
  fetchGraphQL(queryLaunches).then(parseLaunchData).then(sortLaunchData)

/**
 * Parses the raw launch data into a more readable and TypeScript friendly
 * manner, this way we only need to handle edge cases such as undefined
 * missionIds once.
 */
const parseLaunchData = (data: LaunchResponse): Launch[] =>
  data.launches.map(raw => ({
    missionId: raw.mission_id[0] || 'NONE',
    missionName: raw.mission_name,
    launchSite: raw.launch_site.site_name,
    launchDate: new Date(raw.launch_date_local),
    rocketName: raw.rocket.rocket_name,
    rocketCompany: raw.rocket.rocket.company,
    rocketMass: raw.rocket.rocket.mass.kg,
  }))

/**
 * After we have parsed the raw launch data, we want to sort by the date on
 * the first pass as some of the items in the raw data are out of order.
 */
const sortLaunchData = (data: Launch[]) =>
  data.sort((launchOne, launchTwo) => {
    if (launchOne < launchTwo) return 1
    if (launchOne > launchTwo) return -1
    return 0
  })
