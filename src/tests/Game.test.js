import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { element } from "prop-types"
import React from "react"
import { questionsResponse } from "../../cypress/mocks/questions"
import App from "../App"
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux"
const {invalidTokenQuestionsResponse} = require('../../cypress/mocks/questions')

describe('Testing game page', () => {
  afterEach(() => jest.clearAllMocks());

	test('Testing if all elements are present in screen', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(questionsResponse)
    });
  
		const { history } = renderWithRouterAndRedux(<App />);
		history.push('/game');
  
    await waitFor(() => expect(fetch).toHaveBeenCalled())
		const logo = await screen.findByRole("img", { name: /logo/i });
		const text = await screen.findByText("SUA VEZ");
		const avatar = await screen.findByTestId('header-profile-picture');
		const player = await screen.findByText("Player:");
		const score = await screen.findByText("Score:");
		const timer = await screen.findByText("Timer: 30");
	})
	test('Testing all answers', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
			json: jest.fn().mockResolvedValue(questionsResponse)
		})

	  const person = {
      name: 'Lucas',
      score: 0,
      picture: '',
    };

		localStorage.setItem('ranking', JSON.stringify([person]))
	
		const { history } = renderWithRouterAndRedux(<App />);
		history.push('/game');

    await waitFor(() => expect(fetch).toHaveBeenCalled())
		const firstQuestion = await screen.findByText("The Republic of Malta is the smallest microstate worldwide.");
		const falseButton = await screen.findByRole("button", { name: /false/i });
		const trueButton = await screen.findByRole("button", { name: /true/i });
		userEvent.click(falseButton);

		falseButton.classList.contains('question-incorrect'); 
		trueButton.classList.contains('question-correct'); 

		const nextButton1 = await screen.findByRole("button", { name: /next/i });
		userEvent.click(nextButton1);
		const secondQuestion = await screen.findByText("In quantum physics, which of these theorised sub-atomic particles has yet to be observed?");
		const secondCorrectAnswer = await screen.findByText("Graviton");
		userEvent.click(secondCorrectAnswer);

		secondCorrectAnswer.classList.contains('question-correct'); 
		
		const nextButton2 = await screen.findByRole("button", { name: /next/i });
		userEvent.click(nextButton2);
		const thirdQuestion = await screen.findByText("Generally, which component of a computer draws the most power?");
		const thirdCorrectAnswer = await screen.findByText("Video Card");
		userEvent.click(thirdCorrectAnswer);

		thirdCorrectAnswer.classList.contains('question-correct'); 

		const nextButton3 = await screen.findByRole("button", { name: /next/i });
		userEvent.click(nextButton3);
		const forthQuestion = await screen.findByText("What is the most expensive weapon in Counter-Strike: Global Offensive?");
		const forthCorrectAnswer = await screen.findByText("Scar-20/G3SG1");
		userEvent.click(forthCorrectAnswer);
		
		forthCorrectAnswer.classList.contains('question-correct'); 

		const nextButton4 = await screen.findByRole("button", { name: /next/i });
		userEvent.click(nextButton4);
		const fifthQuestion = await screen.findByText("Who was the Author of the manga Uzumaki?");
		const fifthWrongAsnwer = await screen.findByText("Noboru Takahashi");
		userEvent.click(fifthWrongAsnwer);

		forthCorrectAnswer.classList.contains('question-incorrect'); 

		const nextButton5 = await screen.findByRole("button", { name: /next/i });
		userEvent.click(nextButton5);
		const playAgain = await screen.findByRole("button", { name: /play again/i });
		const ranking = await screen.findByRole("button", { name: /ranking/i });
	})
})

describe('Testing invalid token ', () => {
  
  test('Test return home page', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(invalidTokenQuestionsResponse)
    })
    const { history } = renderWithRouterAndRedux(<App />);
    const name = screen.getByTestId('input-player-name');
    const email = screen.getByTestId('input-gravatar-email');
    const gameButton = screen.getByRole('button', { name: 'Play' });

    userEvent.type(name, 'test');
    userEvent.type(email, 'test@test.com');
    userEvent.click(gameButton);

    await waitFor(() => expect(fetch).toHaveBeenCalled())
  
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});
