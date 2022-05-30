import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search by name, launch site, etc...'}
        placeholderTextColor={'#999'}
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
    backgroundColor: '#232323',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
})
