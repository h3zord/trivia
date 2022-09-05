import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import { questionsResponse } from '../../cypress/mocks/questions';

describe('Testing the Ranking Page', () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(questionsResponse)
  })

test('Test ranking page when game is over', async () => {
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

    const rankingButton = screen.getByRole('button', {  name: /ranking/i});
    userEvent.click(rankingButton);
    const homeButton = screen.getByRole("button", { name: /go home!/i });
    userEvent.click(homeButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});
