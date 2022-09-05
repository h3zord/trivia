import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import Feedback from '../pages/Feedback/';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
const {questionsResponse} = require('../../cypress/mocks/questions')

describe('Testing the Feedback Page', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(questionsResponse),
  }));
  test('Test if Feedback page is renders correctly', () => {
    const feedback = renderWithRouterAndRedux(<Feedback />);

    const message = screen.getByTestId('feedback-text');
    const assertions = screen.getByTestId('feedback-total-question');
    const score = screen.getByTestId('feedback-total-score');

    expect(message).toBeInTheDocument();
    expect(assertions).toBeInTheDocument();
    expect(score).toBeInTheDocument();
});

test('Test playing the game and starting a new game', async () => {
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
    const nextQuestion = screen.getByRole('button', { name: 'Next' });
    userEvent.click(nextQuestion);
    userEvent.click(await screen.findByTestId('correct-answer'));
    userEvent.click(screen.getByRole('button', { name: 'Next' }));
    userEvent.click(await screen.findByTestId('correct-answer'));
    userEvent.click(screen.getByRole('button', { name: 'Next' }));
    userEvent.click(await screen.findByTestId('correct-answer'));
    userEvent.click(screen.getByRole('button', { name: 'Next' }));
    userEvent.click(await screen.findByTestId('correct-answer'));
    userEvent.click(screen.getByRole('button', { name: 'Next' }));

    const playAgainButton = screen.getByRole('button', { name: 'Play Again' });
    userEvent.click(playAgainButton);

    const { pathname } = feedback.history.location;
    expect(pathname).toBe('/');
});

test('Test when finish the game and click Ranking button for render ranking page', async () => {
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
  const nextQuestion = screen.getByRole('button', { name: 'Next' });
  userEvent.click(nextQuestion);
  userEvent.click(await screen.findByTestId('correct-answer'));
  userEvent.click(screen.getByRole('button', { name: 'Next' }));
  userEvent.click(await screen.findByTestId('correct-answer'));
  userEvent.click(screen.getByRole('button', { name: 'Next' }));
  userEvent.click(await screen.findByTestId('correct-answer'));
  userEvent.click(screen.getByRole('button', { name: 'Next' }));
  userEvent.click(await screen.findByTestId('correct-answer'));
  userEvent.click(screen.getByRole('button', { name: 'Next' }));

  const rankingButton = screen.getByRole('button', {  name: /ranking/i});
  userEvent.click(rankingButton);

  const { pathname } = feedback.history.location;
  expect(pathname).toBe('/ranking');
});

});
