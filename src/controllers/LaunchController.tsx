import React, {useCallback, useEffect, useState} from 'react'
import {ScrollView} from 'react-native'
import {LaunchCell, SearchBar} from '../components'
import {fetchLaunches} from '../graphql'
import {useSearchFilter} from '../hooks'
import type {Launch} from '../interfaces'
interface LaunchControllerProps {}

/**
 * The launch list controller handles fetching, displaying and filtering
 * the spacex launch data as well as handling any errors that might
 * arise from poor network conditions.
 */
export const LaunchController = (_props: LaunchControllerProps) => {
  /* setup local state which holds the launches and search query */
  const [launches, setLaunches] = useState<Launch[]>([])
  const [error, setError] = useState<Error | undefined>()
  const [search, setSearch] = useState<string>()

  /* clear any errors and fetch the data */
  const onLoadData = useCallback(() => {
    setError(undefined)
    fetchLaunches()
      .then(data => setLaunches(data))
      .catch(err => setError(err))
  }, [])

  /* load the data when the component is initialized */
  useEffect(() => {
    onLoadData()
  }, [])

  /* filter the launch data by any search queries */
  const filteredData = useSearchFilter(launches, search)

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {filteredData.map(data => {
          return <LaunchCell data={data} key={data.uniqueKey} />
        })}
      </ScrollView>
    </>
  )
}
