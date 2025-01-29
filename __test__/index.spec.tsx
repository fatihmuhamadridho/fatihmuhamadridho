import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';
import HomePage from '../src/pages';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('index', () => {
  beforeAll(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/',
      pathname: '/',
      push: jest.fn(),
      query: {},
      route: '/',
    });
  });

  it('should check render', async () => {
    render(<HomePage />);
  });
});
