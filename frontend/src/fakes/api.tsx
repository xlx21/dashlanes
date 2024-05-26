import { IBoardApi, Board, Lane, Stage } from "../api/BoardApi"

export class FakeBoardApi implements IBoardApi {
  async get(): Promise<Board> {
    const board = new Board(
      "myboard",
      new Array<Lane>(
        new Lane(
          "lane1",
          new Array<Stage>(
            new Stage("stage1"), new Stage("stage2")
          ),
        ),
        new Lane(
          "lane2",
          new Array<Stage>(
            new Stage("stage3"), new Stage("stage4")
          ),
        ),
      )
    );

    return Promise.resolve(board);
  }
}

