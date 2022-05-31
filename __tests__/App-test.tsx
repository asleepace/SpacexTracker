/**
 * @format
 */

import React from 'react'
import 'react-native'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import {ErrorView, LabeledText} from '../src/components'

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
