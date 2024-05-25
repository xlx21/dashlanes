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

  constructor(name: string) {
    this.name = name;
  }
}
