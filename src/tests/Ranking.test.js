import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';

import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
const {questionsResponse} = require('../../cypress/mocks/questions')

describe('Testing the Ranking Page', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(questionsResponse),
  }));

test('Test ranking page when finish the game and click ranking button', async () => {
  const feedback = renderWithRouterAndRedux(<App />);

  const name = screen.getByTestId('input-player-name');
  const email = screen.getByTestId('input-gravatar-email');
  const gameButton = screen.getByRole('button', { name: 'Play' });

  userEvent.type(name, 'usuario1');
  userEvent.type(email, 'test@test.com');
  userEvent.click(gameButton);


  await waitFor(() => expect(fetch).toHaveBeenCalled())
  
  const correctAnswer1 = await screen.findByTestId('correct-answer');
  userEvent.click(correctAnswer1);
  userEvent.click(correctAnswer1);
  const nextQuestion = screen.getByRole('button', { name: 'Next' });
  userEvent.click(nextQuestion);
  userEvent.click(await screen.findByTestId('correct-answer'));
  userEvent.click(screen.getByRole('button', { name: 'Next' }));
  userEvent.click(await screen.findByTestId('correct-answer'));
  userEvent.click(screen.getByRole('button', { name: 'Next' }));
  userEvent.click(await screen.findByTestId('correct-answer'));
  userEvent.click(screen.getByRole('button', { name: 'Next' }));
  const wrong1 = await screen.findByTestId('wrong-answer-1')
  userEvent.click(wrong1);
  userEvent.click(wrong1);
  userEvent.click(screen.getByRole('button', { name: 'Next' }));

  const rankingButton = screen.getByRole('button', {  name: /ranking/i});
  userEvent.click(rankingButton);
  const home = screen.getByRole('button', {
    name: /home/i
  });
  userEvent.click(home);


  const { pathname } = feedback.history.location;
  expect(pathname).toBe('/');
});

});
