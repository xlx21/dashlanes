import { IBoardApi, Board } from "../api/BoardApi"

export class FakeBoardApi implements IBoardApi {
  async get(): Promise<Board> {
    return Promise.resolve(new Board("myboard"));
  }
}

