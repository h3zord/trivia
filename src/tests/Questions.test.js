import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import App from "../App"
import Game from "../pages/Game"
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux"
const { questionsResponse, invalidTokenQuestionsResponse } = require('../../cypress/mocks/questions');

describe('testing', () => {
  const INITIAL_STATE = {
    player: {
      score: 0,
    },
    timer: 0,
    timeOver: false,
    showButton: false,
  };

  test('Verifica se é redirecionado para a página inicial caso o token não seja válido', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(invalidTokenQuestionsResponse),
    });

    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE, '/game');
    
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const { location: { pathname } } = history
    expect(pathname).toBe('/')
  });
  test('Testando se a classe é adicionada na resposta', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(questionsResponse),
    });

    renderWithRouterAndRedux(<Game />)
    await waitFor(() => expect(fetch).toHaveBeenCalled())
		const firstQuestion = await screen.findByText("The Republic of Malta is the smallest microstate worldwide.");
		const falseButton = await screen.findByRole("button", { name: /false/i });
		const trueButton = await screen.findByRole("button", { name: /true/i });
		userEvent.click(trueButton);
    trueButton.classList.contains('question-correct'); 
  })
})