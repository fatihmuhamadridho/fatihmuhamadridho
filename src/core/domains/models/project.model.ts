export class Project {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public role: string,
    public thumbnail: string,
    public tools: string[],
    public made_at: string,
    public date: string,
    public link?: {
      title: string;
      url: string;
    },
  ) {}

  static getDateMonthYear(date: number, month: number, year: number) {
    return new Date(year, month + 1, date).toISOString();
  }
}
