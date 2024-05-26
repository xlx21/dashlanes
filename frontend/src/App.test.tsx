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

  await act(async () => screen.getByText(/get board/i).click());

  expect(screen.getByText(/myboard/i)).toBeInTheDocument();
  expect(screen.getByText(/lane1/i)).toBeInTheDocument();
  expect(screen.getByText(/lane2/i)).toBeInTheDocument();
  expect(screen.getByText(/stage1/i)).toBeInTheDocument();
  expect(screen.getByText(/stage2/i)).toBeInTheDocument();
  expect(screen.getByText(/stage3/i)).toBeInTheDocument();
  expect(screen.getByText(/stage4/i)).toBeInTheDocument();
});
