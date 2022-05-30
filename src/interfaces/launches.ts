/**
 * TypeScript interface for the fetchLaunches response which contains
 * an array of launch data returned by the API.
 */
export interface LaunchResponse {
  launches: RawLaunch[]
}

/**
 * TypeScript interface for the launch data returned by the GraphQL
 * API which contains the raw launch data.
 */
export interface RawLaunch {
  launch_date_local: Date
  launch_site: {
    site_name: string
  }
  mission_id: string[]
  mission_name: string
  rocket: {
    rocket: {
      company: string
      name: string
      mass: {
        kg: number
      }
    }
    rocket_name: string
  }
}

/**
 * After fetching the raw launch data we will transform the object
 * to look like this to remove handling this logic in the cells.
 */
export interface Launch {
  missionId: string
  missionName: string
  launchSite: string
  launchDate: Date
  rocketName: string
  rocketCompany: string
  rocketMass: number
}
