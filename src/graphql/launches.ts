/**
 * Launches
 * This is the GraphQL query string which will return upcoming spacex mission
 * launches along with the launch site and rocket names.
 */
export const queryLaunches = `
query Launches {
  launches {
    mission_name
    mission_id
    rocket {
      rocket_name
      rocket {
        company
        name
        mass {
          kg
        }
      }
    }
    launch_site {
      site_name
    }
    launch_date_local
  }
}`
