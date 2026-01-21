import React from 'react';
import { render } from '@testing-library/react';
// dynamic import to avoid CJS/ESM issues like in other a11y tests
import About from '../About';

describe('Accessibility checks', () => {
  it('About section has no detectable a11y violations', async () => {
    const { container } = render(<About />);
  // axe.run expects a real DOM node; import dynamically to avoid CJS/ESM issues
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axe = await import('axe-core');
  const runner = (axe && (axe as any).run) ? (axe as any) : (axe as any).default || axe;
  const results = await runner.run(container);
    expect(results.violations).toHaveLength(0);
  }, 10000);
});
