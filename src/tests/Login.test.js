import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import { questionsResponse } from './mocks/questions';

describe('Testing the Login Component', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(questionsResponse),
  }));

  test('Test if Login page is renders correctly', () => {

    const { history } = renderWithRouterAndRedux(<App />);

    const name = screen.getByTestId('input-player-name');
    const email = screen.getByTestId('input-gravatar-email');
    const playButton = screen.getByRole("button", { name: /play/i });
    const settingsButton = screen.getByRole("button", { name: /configurações/i });

    
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();

    
    const { pathname } = history.location;
    expect(pathname).toBe('/');
});

test('Test login and if game button redirect for game page correctly', async () => {
  const { history } = renderWithRouterAndRedux(<App />);

  const name = screen.getByTestId('input-player-name');
  const email = screen.getByTestId('input-gravatar-email');
  const playButton = screen.getByRole("button", { name: /play/i });

  userEvent.type(name, 'test');
  userEvent.type(email, 'test@test.com');
  userEvent.click(playButton);

  await waitFor(() => expect(fetch).toHaveBeenCalled())

  const { pathname } = history.location;
  expect(pathname).toBe('/game');
});

test('Testing configuration page', () => {
  const { history } = renderWithRouterAndRedux(<App />);

  const name = screen.getByTestId('input-player-name');
  const email = screen.getByTestId('input-gravatar-email');
  const playButton = screen.getByRole("button", { name: /configurações/i });

  userEvent.type(name, 'test');
  userEvent.type(email, 'test@test.com');
  userEvent.click(playButton);

  const { pathname } = history.location;
  expect(pathname).toBe('/settings');
  });
});