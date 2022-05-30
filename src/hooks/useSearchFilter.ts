import {useMemo} from 'react'
import {Launch} from '../interfaces/launches'

/**
 * Filters launches by the launch site or rocket name and a given search
 * query. This will not mutate the original launch data.
 */
export const useSearchFilter = (data: Launch[], query: string | undefined) => {
  return useMemo(() => {
    /* if no search query then we can just return the data as normal */
    if (!query || query.length === 0) return data
    /* all comparisons are done using lowercase strings */
    const searchTerm = query.toLowerCase()
    /* return any elements which include the search query */
    return data.filter(item => {
      const launchSite = item.launchSite.toLowerCase()
      const rocketName = item.rocketName.toLowerCase()
      return launchSite.includes(searchTerm) || rocketName.includes(searchTerm)
    })
  }, [data.length, query])
}
