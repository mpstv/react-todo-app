import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('element was created', () => {
  const renderResult = render(<App />);
  expect(renderResult.baseElement).toBeTruthy();
});
