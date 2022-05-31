import React, {useImperativeHandle, useState} from 'react'
import {Image, Modal, StyleSheet, TouchableOpacity, View} from 'react-native'
import {LabeledText, Text} from '../components'

interface AboutMeControllerProps {}

export interface AboutMeHandle {
  show(): void
  hide(): void
}

/**
 * A modal which contains information about the author, this component makes use
 * of forwardRef along with useImperativeHandle to display the modal.
 */
export const AboutMeController = React.forwardRef((_props, ref) => {
  const [visible, setVisible] = useState(false)

  /* exposes the hide and show methods */
  useImperativeHandle(ref, () => ({
    hide: () => setVisible(false),
    show: () => setVisible(true),
  }))

  return (
    <Modal
      presentationStyle={'formSheet'}
      visible={visible}
      animationType={'slide'}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/colin.jpeg')}
          resizeMode={'cover'}
          style={styles.colin}
        />
        <LabeledText label={'full name'} text={'Colin Teahan'} />
        <LabeledText label={'phone number'} text={'+1 (415) 302-7992'} />
        <LabeledText label={'email address'} text={'colin_teahan@yahoo.com'} />
        <LabeledText label={'current location'} text={'San Francisco, CA'} />
        <LabeledText
          label={'github url'}
          text={'https://github.com/asleepace'}
        />
        <LabeledText
          label={'linkedin url'}
          text={'https://www.linkedin.com/in/colin-teahan/'}
        />
        <TouchableOpacity
          style={styles.close}
          onPress={() => setVisible(false)}>
          <Text style={styles.closeText}>{'DISMISS'}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'space-between',
    paddingVertical: 60,
    padding: 16,
    flex: 1,
  },
  colin: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  close: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 8,
    height: 40,
  },
  closeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
})
