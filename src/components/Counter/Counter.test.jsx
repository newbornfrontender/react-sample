import React from 'react';
import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

test('can render counter with default state', () => {
  render(<Counter />);
  const counter = screen.getByTestId('counter');
  expect(counter).toHaveTextContent('0');
});
