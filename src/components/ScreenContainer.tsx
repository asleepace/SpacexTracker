import React from 'react'
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'

/**
 * This component is a wrapper around the different screens (in this case only one).
 * The idea is as we scale the app out with more an more screens and features, they
 * will all share some common items such as the safe area, status bar, etc.
 */
export const ScreenContainer: React.FC<{}> = props => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      resizeMode={'cover'}
      style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} />
        {props.children}
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  image: {
    height: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
})
