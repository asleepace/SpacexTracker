import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import {System} from '../utils'

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
        placeholderTextColor={System.foregroundLight}
        clearButtonMode={'while-editing'}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: System.unit * 2,
    minHeight: System.unit * 8,
  },
  input: {
    color: System.color,
    backgroundColor: System.backgroundColor,
    paddingHorizontal: System.unit,
    paddingVertical: System.unit,
    borderRadius: System.unit,
  },
})
