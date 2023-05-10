import * as renderer from '@testing-library/react-native';
import React from 'react';
import { test, expect } from 'vitest';

import { HelloWorldApp } from './index';

test('HelloWorldApp', () => {
  const view = renderer.render(<HelloWorldApp />);
  expect(view.getByText(/Hello/)).toBeTruthy();
});
