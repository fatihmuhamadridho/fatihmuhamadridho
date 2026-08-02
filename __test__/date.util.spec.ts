import { DateUtil } from '@/utils/date.util';

describe('DateUtil', () => {
  it('formats month and year consistently in Asia/Jakarta', () => {
    expect(DateUtil.getMonthYearText('2023-08-31T17:00:00.000Z', 'en')).toBe('September 2023');
  });

  it('gets year consistently in Asia/Jakarta', () => {
    expect(DateUtil.getYear('2023-12-31T17:00:00.000Z')).toBe(2024);
  });
});
