/**
 * @format
 */

import 'react-native';
import React from 'react';
import AppReactNativeTemplate from '../src/components/scenes/AppReactNativeTemplate';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<AppReactNativeTemplate/>);
});
