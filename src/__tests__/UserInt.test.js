import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('Testing user interactions on the main component (App.js).', () => {
  describe('When user clicks on Home button', () => {
    it('should render the home page', async () => {
      act(() => {
        render(<App />);
      });
      await userEvent.click(screen.getByRole('link', { name: /Home/i }));
      expect(
        screen.getByRole('heading', { name: /welcome to our page/i }),
      ).toBeInTheDocument();
    });
  });

  describe('When user clicks on Home button', () => {
    it('should render the home page', async () => {
      act(() => {
        render(<App />);
      });
      await userEvent.click(screen.getByRole('link', { name: /Calculator/i }));
      expect(
        screen.getByRole('heading', { name: /JorumOdiemo/i }),
      ).toBeInTheDocument();
    });
  });
});


