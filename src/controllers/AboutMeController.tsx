import React from 'react'
import {Modal, StyleSheet, View} from 'react-native'
import {LabeledText} from '../components'

interface AboutMeControllerProps {
  isVisible: boolean
}

export const AboutMeController = ({isVisible}: AboutMeControllerProps) => {
  return (
    <Modal presentationStyle={'formSheet'} visible={isVisible}>
      <View style={styles.container}>
        <LabeledText label={'name'} text={'Colin Teahan'} />
        <LabeledText label={'phone number'} text={'+1 (415) 302-7992'} />
        <LabeledText label={'email address'} text={'colin_teahan@yahoo.com'} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 16,
    flex: 1,
  },
})
