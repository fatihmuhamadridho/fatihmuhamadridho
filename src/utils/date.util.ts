export class DateUtil {
  static getDateMonthYear(date: number, month: number, year: number) {
    return new Date(year, month + 1, date).toISOString();
  }

  static getMonthYearText(date: string, locale: string): string {
    const d = new Date(date);
    return new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric',
    }).format(d);
  }

  static getYear(date: string): number {
    const d = new Date(date);
    return d.getFullYear();
  }
}
