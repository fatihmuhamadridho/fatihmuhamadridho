export class Experience {
  constructor(
    public readonly id: string,
    public company: string,
    public role: string,
    public type: 'internship' | 'contract' | 'fulltime',
    public description: string,
    public tools: string[],
    public start_date: string,
    public end_date: string,
    public is_present: boolean,
    public is_show: boolean,
  ) {}

  static getDateMonthYear(date: number, month: number, year: number) {
    return new Date(year, month + 1, date).toISOString();
  }
}
