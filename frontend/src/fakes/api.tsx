import { IBoardApi, Board, Lane } from "../api/BoardApi"

export class FakeBoardApi implements IBoardApi {
  async get(): Promise<Board> {
    const board = new Board(
      "myboard",
      new Array<Lane>(new Lane("lane1"), new Lane("lane2"))
    );

    return Promise.resolve(board);
  }
}

