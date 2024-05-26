export default class BoardApi implements IBoardApi {
  async get(): Promise<Board> {
    const res = await fetch("http://localhost:5284/board")
    return await res.json()
  }
}

export interface IBoardApi {
  get(): Promise<Board>;
}

export class Board {
  name: string;
  lanes: Array<Lane>;

  constructor(name: string, lanes: Array<Lane>) {
    this.name = name;
    this.lanes = lanes;
  }
}

export class Lane {
  name: string;
  stages: Array<Stage>;

  constructor(name: string, stages: Array<Stage>) {
    this.name = name;
    this.stages = stages;
  }
}

export class Stage {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
