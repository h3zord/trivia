import { screen, waitFor } from "@testing-library/react"
import React from "react"
import Game from "../pages/Game"
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux"
import { questionsResponse } from "../../cypress/mocks/questions"

describe('testing', () => {
  const INITIAL_STATE = {
    player: {
      score: 0,
    },
    timer: 30,
    timeOver: false,
    showButton: false,
  };

  test('Testing if timer works correctly', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(questionsResponse),
    });

    jest.useFakeTimers();
    
    renderWithRouterAndRedux(<Game />, INITIAL_STATE);
    
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    jest.advanceTimersByTime(5000);
    
    const timer = screen.getByTestId('timer');
    expect(timer).toHaveTextContent(25);

  });
  test('Testing time over', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(questionsResponse),
    });

    jest.useFakeTimers();
    
    renderWithRouterAndRedux(<Game />, INITIAL_STATE);
    
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    jest.advanceTimersByTime(35000);
    
    const timer = screen.getByTestId('timer');
    expect(timer).toHaveTextContent(0);

    const nextButton = screen.getByTestId('btn-next');
    expect(nextButton).toBeInTheDocument();

    const correctAnswers = screen.getByTestId('correct-answer');
    expect(correctAnswers).toBeDisabled();
  });
}) 