import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {PRODUCTS} from "./mock-products";

test('renders app', () => {
  const {getByText} = render(<App />);
  const title = getByText(/web component in React/i);
  expect(title).toBeInTheDocument();
});

test('renders web components', () => {
  const {getByTestId} = render(<App />);
  const card = getByTestId(`card-${PRODUCTS[0].pid}`)
  expect(card).toBeInTheDocument();
  expect(card).toHaveAttribute('badge', PRODUCTS[0].badge);
});

test('handles custom event from web components', async () => {
  const {getByTestId, getByText} = render(<App />);
  const card = getByTestId(`card-${PRODUCTS[0].pid}`)
  expect(card).toBeInTheDocument();

  fireEvent(card, new CustomEvent('addToCart', {detail: '111', bubbles: true}))
  expect(getByText((content, element) => content.includes('111'))).toBeInTheDocument()
});



