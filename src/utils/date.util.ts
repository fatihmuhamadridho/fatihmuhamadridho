export class DateUtil {
  private static readonly TIME_ZONE = 'Asia/Jakarta';

  private static parseDate(value: string): Date | null {
    const date = new Date(value);
    return Number.isFinite(date.getTime()) ? date : null;
  }

  static getDateMonthYear(date: number, month: number, year: number) {
    return new Date(year, month + 1, date).toISOString();
  }

  static getMonthYearText(date: string, locale: string): string {
    const d = DateUtil.parseDate(date);
    if (!d) {
      return '';
    }

    return new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric',
      timeZone: DateUtil.TIME_ZONE,
    }).format(d);
  }

  static getYear(date: string): string {
    const d = DateUtil.parseDate(date);
    if (!d) {
      return '';
    }

    return new Intl.DateTimeFormat('en', {
      year: 'numeric',
      timeZone: DateUtil.TIME_ZONE,
    }).format(d);
  }
}
