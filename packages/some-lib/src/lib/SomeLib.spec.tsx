import { render } from '@testing-library/react';

import SomeLib from './SomeLib';

describe('SomeLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SomeLib />);
    expect(baseElement).toBeTruthy();
  });
});
