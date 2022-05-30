import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

interface SearchBarProps {
  onSearch(filter: string): void
}

export const SearchBar = ({onSearch}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search by name, launch site, etc...'}
        onChangeText={text => onSearch(text)}
        placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
        clearTextOnFocus={true}
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
    backgroundColor: 'black',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
})
