import React from 'react';
import { describe, it, expect } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders App', () => {
  it('renders App', () => {
    render(<App />);
  })
});
