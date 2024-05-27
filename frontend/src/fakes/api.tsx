import { IBoardApi, Board, Lane, Stage, Ticket } from "../api/BoardApi"

export class FakeBoardApi implements IBoardApi {
  async get(): Promise<Board> {
    const board = new Board(
      "myboard",
      new Array<Lane>(
        new Lane(
          "lane1",
          new Array<Stage>(
            new Stage(
              "stage1",
              new Array<Ticket>(new Ticket("tick1", "desc1"))
            ),
            new Stage(
              "stage2",
              new Array<Ticket>(new Ticket("tick2", "desc2"))
            )
          ),
        ),
        new Lane(
          "lane2",
          new Array<Stage>(
            new Stage(
              "stage3",
              new Array<Ticket>(new Ticket("tick3", "desc3"))
            ),
            new Stage(
              "stage4",
              new Array<Ticket>(new Ticket("tick4", "desc4"))
            )
          ),
        ),
      )
    );

    return Promise.resolve(board);
  }
}

