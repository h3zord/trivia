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
    timer: 30,
    timeOver: false,
    showButton: false,
  };

  test('Verifica funcionamento do timer', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(questionsResponse),
    });

    jest.useFakeTimers();
    
    renderWithRouterAndRedux(<Game />, INITIAL_STATE);
    
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    jest.advanceTimersByTime(3000);
    
    const timer = screen.getByTestId('timer');
    expect(timer).toHaveTextContent(27);

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  test('Verifica atualização do timer', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(questionsResponse),
    });

    jest.useFakeTimers();
    
    renderWithRouterAndRedux(<Game />, INITIAL_STATE);
    
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    jest.advanceTimersByTime(35000);
    
    const timer = screen.getByTestId('timer');
    expect(timer).toHaveTextContent(0);

    const btnNext = screen.getByTestId('btn-next');
    expect(btnNext).toBeInTheDocument();

    const questionButton = screen.getByTestId('correct-answer');
    expect(questionButton).toBeDisabled();
  });
}) 