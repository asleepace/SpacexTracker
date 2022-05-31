import React, {useCallback, useEffect, useState} from 'react'
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native'
import {ErrorView, LaunchCell, LoadingView, SearchBar} from '../components'
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
    setSearch('')
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

  /* toggle the no search results found error */
  useEffect(() => {
    if (!error && !filteredData.length && launches.length)
      setError(Error('No search results found!'))
    else if (launches.length && filteredData.length && error)
      setError(undefined)
  }, [filteredData, launches, error])

  /* helper variables which make the code easier to read */
  const didEncounterErrorWhileLoading = Boolean(error)
  const didStartLoadingLaunchData = Boolean(!launches?.length)

  /* helper method for rendering the 3 states: error, loading, launches */
  const RenderContent = () => {
    if (didEncounterErrorWhileLoading)
      return <ErrorView error={error} onReload={onLoadData} />
    if (didStartLoadingLaunchData) return <LoadingView />
    /* no refreshing if the user is searching */
    return (
      <FlatList
        data={filteredData}
        renderItem={({item}) => <LaunchCell data={item} />}
        keyExtractor={(item, index) => `${item.uniqueKey}_${index}`}
        ListFooterComponent={<View style={styles.spacer} />}
        style={styles.list}
        refreshControl={
          search ? undefined : (
            <RefreshControl
              refreshing={didStartLoadingLaunchData}
              colors={['white', 'white']}
              onRefresh={onLoadData}
            />
          )
        }
      />
    )
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setSearch} />
      <RenderContent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
  },
  refresh: {
    color: 'white',
  },
  spacer: {
    height: 120,
  },
})
