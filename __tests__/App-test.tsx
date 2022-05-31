/**
 * quick and dirty component unit tests to make sure everything renders as expected
 * with the given props.
 */

import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import {
  ErrorView,
  LabeledText,
  LoadingView,
  ScreenContainer,
  SearchBar,
  SpacexLogo,
  Text,
} from '../src/components'

it('Renders ErrorView', () => {
  renderer.create(<ErrorView error={Error('test error')} onReload={() => {}} />)
  renderer.create(<ErrorView error={Error('test error')} />)
  renderer.create(<ErrorView onReload={() => null} />)
  renderer.create(<ErrorView />)
})

it('Renders LabeledText', () => {
  renderer.create(<LabeledText label={'some label'} text={'some value'} />)
  renderer.create(<LabeledText text={'some value'} />)
  renderer.create(<LabeledText label={'some label'} />)
  renderer.create(<LabeledText label={''} text={''} />)
})

it('Renders LoadingView', () => {
  renderer.create(<LoadingView />)
})

it('Renders SearchBar', () => {
  renderer.create(<SearchBar onSearch={() => null} />)
})

it('Renders SpacexLogo', () => {
  renderer.create(<SpacexLogo onPress={() => null} />)
})

it('Renders Text', () => {
  renderer.create(<Text>{'some text'}</Text>)
  renderer.create(<Text style={{flex: 1}}>{'some text'}</Text>)
  renderer.create(
    <Text style={[{flex: 1}, {color: 'black'}]}>{'some text'}</Text>,
  )
})

it('Renders ScreenContainer', () => {
  renderer.create(
    <ScreenContainer>
      <Text>{'screens'}</Text>
    </ScreenContainer>,
  )
})
