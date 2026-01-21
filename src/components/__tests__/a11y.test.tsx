import React from 'react';
import { render } from '@testing-library/react';
import * as axe from 'axe-core';
import About from '../About';

describe('Accessibility checks', () => {
  it('About section has no detectable a11y violations', async () => {
    const { container } = render(<About />);
    // axe.run expects a real DOM node; using document.body to include any aria-hidden changes
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  }, 10000);
});
