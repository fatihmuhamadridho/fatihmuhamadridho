import { StorageUtil } from '@/utils/storage.util';

describe('StorageUtil', () => {
  const originalLocalStorage = window.localStorage;

  afterEach(() => {
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      value: originalLocalStorage,
    });
  });

  it('returns null when localStorage access throws', () => {
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      get: () => {
        throw new DOMException('Blocked', 'SecurityError');
      },
    });

    expect(StorageUtil.getNumber('visit:lastTracked:/')).toBeNull();
  });

  it('returns false when localStorage write throws', () => {
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      get: () => {
        throw new DOMException('Blocked', 'SecurityError');
      },
    });

    expect(StorageUtil.setNumber('visit:lastTracked:/', Date.now())).toBe(false);
  });
});
