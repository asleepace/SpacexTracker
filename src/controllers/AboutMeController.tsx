import React, {useState} from 'react'
import {Image, Modal, StyleSheet, View} from 'react-native'
import {LabeledText} from '../components'

interface AboutMeControllerProps {
  shouldShow: boolean
}

interface AboutMeHandle {
  show(): void
  hide(): void
}

export const AboutMeController = (
  {shouldShow}: AboutMeControllerProps,
  ref: React.RefObject<AboutMeHandle>,
) => {
  const [visible, setVisible] = useState(shouldShow)

  // useImperativeHandle(ref, () => ({
  //   hide: () => setVisible(false),
  //   show: () => setVisible(true),
  // }))

  return (
    <Modal presentationStyle={'formSheet'} visible={visible}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/colin.jpeg')}
          resizeMode={'cover'}
          style={styles.colin}
        />
        <LabeledText label={'name'} text={'Colin Teahan'} />
        <LabeledText label={'phone number'} text={'+1 (415) 302-7992'} />
        <LabeledText label={'email address'} text={'colin_teahan@yahoo.com'} />
        <LabeledText label={'location'} text={'San Francisco, CA'} />
        <LabeledText label={'github'} text={'https://github.com/asleepace'} />
        <LabeledText
          label={'linkedin'}
          text={'https://www.linkedin.com/in/colin-teahan/'}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'space-between',
    paddingVertical: 60,
    padding: 16,
    flex: 1,
  },
  colin: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
})
