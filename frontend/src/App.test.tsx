import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render get board button', () => {
  render(<App />);
  const getBoardButton = screen.getByText(/get board/i);
  expect(getBoardButton).toBeInTheDocument();
});

test('get board', async () => {
  render(<App />);
  const getBoardButton = screen.getByText(/get board/i);
  getBoardButton.click()

  await new Promise(resolve => setTimeout(resolve, 1500));

  const boardName = document.getElementById("boardName");
  expect(boardName).toBeInTheDocument();
});
