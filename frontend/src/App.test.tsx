import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';

test('render get board button', () => {
  render(<App />);
  const getBoardButton = screen.getByText(/get board/i);
  expect(getBoardButton).toBeInTheDocument();
});

test('get board', async () => {
  render(<App />);
  const getBoardButton = screen.getByText(/get board/i);

  act(() => {
    getBoardButton.click()
  })

  const boardName = document.getElementById("boardName");
  expect(boardName).toBeInTheDocument();
});
