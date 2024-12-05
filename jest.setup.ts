/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  }) as any;
