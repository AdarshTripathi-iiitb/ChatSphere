import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders app with initial state', () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  
  expect(getByText('BChat A Multi Room Chat Application')).toBeInTheDocument();
  expect(getByPlaceholderText('@Username')).toBeInTheDocument();
  expect(getByPlaceholderText('#Room')).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Add more tests as needed for your application
