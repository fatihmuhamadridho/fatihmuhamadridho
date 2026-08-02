export class DateUtil {
  private static readonly TIME_ZONE = 'Asia/Jakarta';

  static getDateMonthYear(date: number, month: number, year: number) {
    return new Date(year, month + 1, date).toISOString();
  }

  static getMonthYearText(date: string, locale: string): string {
    const d = new Date(date);
    return new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric',
      timeZone: DateUtil.TIME_ZONE,
    }).format(d);
  }

  static getYear(date: string): number {
    const d = new Date(date);
    return Number(
      new Intl.DateTimeFormat('en', {
        year: 'numeric',
        timeZone: DateUtil.TIME_ZONE,
      }).format(d),
    );
  }
}
