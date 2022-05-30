/**
 * TypeScript interface for the fetchLaunches response which contains
 * an array of launch data returned by the API.
 */
export interface LaunchResponse {
  launches: Launch[]
}

/**
 * TypeScript interface for the launch data returned by the GraphQL
 * API which contains the launch data.
 */
export interface Launch {
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
