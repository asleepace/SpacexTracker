import {useMemo} from 'react'
import {Launch} from '../interfaces/launches'

/**
 * Filters launches by the launch site or rocket name and a given search
 * query. This will not mutate the original launch data.
 */
export const useSearchFilter = (data: Launch[], query: string | undefined) => {
  return useMemo(() => {
    // if no search query then we can just return the data as normal
    if (!query || query.length === 0) return data
    // convert the search term to lowercase for more uniform filtering
    // do this once outside the filter method.
    const searchTerm = query.toLowerCase()
    // filter any elements that include the query and perform the filtering
    // for both launchSite and rocketName with lowercase strings.
    return data.filter(item => {
      const launchSite = item.launchSite.toLowerCase()
      const rocketName = item.rocketName.toLowerCase()
      return launchSite.includes(searchTerm) || rocketName.includes(searchTerm)
    })
  }, [data.length, query])
}
