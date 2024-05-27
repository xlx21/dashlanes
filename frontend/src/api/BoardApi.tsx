export default class BoardApi implements IBoardApi {
  async get(): Promise<Board> {
    // todo: get URL from envvars
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
  tickets: Array<Ticket>;

  constructor(name: string, tickets: Array<Ticket>) {
    this.name = name;
    this.tickets = tickets;
  }
}

export class Ticket {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
