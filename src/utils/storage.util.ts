export const StorageUtil = {
  getNumber(key: string): number | null {
    try {
      const value = localStorage.getItem(key);
      if (value === null) {
        return null;
      }

      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    } catch {
      return null;
    }
  },

  setNumber(key: string, value: number): boolean {
    try {
      localStorage.setItem(key, `${value}`);
      return true;
    } catch {
      return false;
    }
  },
};
