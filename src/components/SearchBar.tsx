import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

interface SearchBarProps {
  onSearch(filter: string): void
}

/**
 * A simple text input which allows the user to filter data by a certain
 * value, shows the dismiss button while editing.
 */
export const SearchBar = ({onSearch}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search by name, launch site, etc...'}
        onChangeText={text => onSearch(text)}
        placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
        clearButtonMode={'while-editing'}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    minHeight: 60,
  },
  input: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
})
