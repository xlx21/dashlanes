import { render, screen, act } from '@testing-library/react';
import { FakeBoardApi } from './fakes/api';
import App from './App';

test("render get board button", () => {
  render(<App boardApi={new FakeBoardApi()} />);
  const getBoardButton = screen.getByText(/get board/i);
  expect(getBoardButton).toBeInTheDocument();
});

test("get and render the name of board", async () => {
  render(<App boardApi={new FakeBoardApi()} />);

  const getBoardButton = screen.getByText(/get board/i);
  await act(async () => getBoardButton.click());

  const boardName = screen.getByText(/myboard/i);
  expect(boardName).toBeInTheDocument();
});
