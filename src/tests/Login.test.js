import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
const {questionsResponse} = require('../../cypress/mocks/questions')

describe('Testing the Login Component', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(questionsResponse),
  }));
  test('Test if Login page is renders correctly', () => {

    const teste = renderWithRouterAndRedux(<App />);

    const name = screen.getByTestId('input-player-name');
    const email = screen.getByTestId('input-gravatar-email');
    const gameButton = screen.getByRole('button', { name: 'Play' });
    const settingsButton = screen.getByRole('button', { name: 'Configurações' });

    
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument();
    expect(gameButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();

    
    const { pathname } = teste.history.location;
    expect(pathname).toBe('/');
});

test('Test login and if game button redirect for game page correctly', async () => {
  const game = renderWithRouterAndRedux(<App />);

  const name = screen.getByTestId('input-player-name');
  const email = screen.getByTestId('input-gravatar-email');
  const gameButton = screen.getByRole('button', { name: 'Play' });

  userEvent.type(name, 'gamer player');
  userEvent.type(email, 'user@teste.com');
  userEvent.click(gameButton);

  await waitFor(() => expect(fetch).toHaveBeenCalled())

  const { pathname } = game.history.location;
  expect(pathname).toBe('/game');
});

test('Testing configuration page', () => {
  const settings = renderWithRouterAndRedux(<App />);

  const name = screen.getByTestId('input-player-name');
  const email = screen.getByTestId('input-gravatar-email');
  const gameButton = screen.getByRole('button', { name: 'Configurações' });

  userEvent.type(name, 'gamer player');
  userEvent.type(email, 'user@teste.com');
  userEvent.click(gameButton);

  const { pathname } = settings.history.location;
  expect(pathname).toBe('/settings');
  });
});