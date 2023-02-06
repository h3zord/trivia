import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { questionsResponse } from './mocks/questions';
import App from '../App';
import Feedback from '../pages/Feedback/';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';


describe('Testing the Feedback Page', () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(questionsResponse)
  })

  test('Testing feedback page', () => {
    renderWithRouterAndRedux(<Feedback />);

    const result = screen.getByText("Could be better...");
    const totalScore = screen.getByTestId('feedback-total-score');
    const hits = screen.getByTestId('feedback-total-question');
    
    expect(result).toBeInTheDocument();
    expect(totalScore).toBeInTheDocument();
    expect(hits).toBeInTheDocument();
});

test('Testing if play again button works correctly', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const name = screen.getByTestId('input-player-name');
    const email = screen.getByTestId('input-gravatar-email');
    const playButton = screen.getByRole('button', { name: 'Play' });

    userEvent.type(name, 'test');
    userEvent.type(email, 'test@test.com');
    userEvent.click(playButton);


    await waitFor(() => expect(fetch).toHaveBeenCalled())
    
    const correctAnswer1 = await screen.findByTestId('correct-answer');
    userEvent.click(correctAnswer1);
    userEvent.click(screen.getByRole("button", { name: /next/i }));
    const correctAnswer2 = await screen.findByTestId('correct-answer')
    userEvent.click(correctAnswer2);
    userEvent.click(screen.getByRole("button", { name: /next/i }));
    const correctAnswer3 = await screen.findByTestId('correct-answer')
    userEvent.click(correctAnswer3)
    userEvent.click(screen.getByRole("button", { name: /next/i }));
    const correctAnswer4 = await screen.findByTestId('correct-answer')
    userEvent.click(correctAnswer4);
    userEvent.click(screen.getByRole("button", { name: /next/i }));
    const correctAnswer5 = await screen.findByTestId('correct-answer')
    userEvent.click(correctAnswer5);
    userEvent.click(screen.getByRole("button", { name: /next/i }));

    const playAgainButton = screen.getByRole('button', { name: 'Play Again' });
    userEvent.click(playAgainButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
});

test('Testing if ranking button works correctly', async () => {
  const { history } = renderWithRouterAndRedux(<App />);

  const name = screen.getByTestId('input-player-name');
  const email = screen.getByTestId('input-gravatar-email');
  const gameButton = screen.getByRole('button', { name: 'Play' });

  userEvent.type(name, 'usuario1');
  userEvent.type(email, 'test@test.com');
  userEvent.click(gameButton);


  await waitFor(() => expect(fetch).toHaveBeenCalled())
  
  const correctAnswer1 = await screen.findByTestId('correct-answer');
  userEvent.click(correctAnswer1);
  userEvent.click(screen.getByRole("button", { name: /next/i }));
  const correctAnswer2 = await screen.findByTestId('correct-answer')
  userEvent.click(correctAnswer2);
  userEvent.click(screen.getByRole("button", { name: /next/i }));
  const correctAnswer3 = await screen.findByTestId('correct-answer')
  userEvent.click(correctAnswer3)
  userEvent.click(screen.getByRole("button", { name: /next/i }));
  const correctAnswer4 = await screen.findByTestId('correct-answer')
  userEvent.click(correctAnswer4);
  userEvent.click(screen.getByRole("button", { name: /next/i }));
  const correctAnswer5 = await screen.findByTestId('correct-answer')
  userEvent.click(correctAnswer5);
  userEvent.click(screen.getByRole("button", { name: /next/i }));

  const rankingButton = screen.getByRole('button', {  name: /ranking/i});
  userEvent.click(rankingButton);

  const { pathname } = history.location;
  expect(pathname).toBe('/ranking');
});

});
