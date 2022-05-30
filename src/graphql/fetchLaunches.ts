import {fetchGraphQL} from './fetchGraphQL'
import {queryLaunches} from './launches'

/**
 * This method combines the generic fetchGraphQL request with the query
 * for fetching launches.
 */
export const fetchLaunches = () => fetchGraphQL(queryLaunches)
