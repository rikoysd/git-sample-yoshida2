export class Employee {
  constructor(private _id: number, private _nickname: string) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get nickname(): string {
    return this._nickname;
  }

  public set nickname(nickname: string) {
    this._nickname = nickname;
  }
}
