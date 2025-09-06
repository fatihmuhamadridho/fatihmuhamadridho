export class Project {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public thumbnail: string,
    public tools: string[],
    public made_at: string,
    public year: number,
    public links?: Array<{
      title: string;
      url: string;
    }>,
  ) {}

  static getDateMonthYear(date: number, month: number, year: number) {
    return new Date(year, month + 1, date).toISOString();
  }
}
