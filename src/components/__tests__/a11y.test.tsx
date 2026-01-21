import React from 'react';
import { render } from '@testing-library/react';
// dynamic import to avoid CJS/ESM issues like in other a11y tests
import About from '../About';
import fs from 'fs';
import path from 'path';

describe('Accessibility checks', () => {
  it('About section has no detectable a11y violations', async () => {
    const { container } = render(<About />);
    // axe.run expects a real DOM node; import dynamically to avoid CJS/ESM issues
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axe = await import('axe-core');
    const runner = (axe && (axe as any).run) ? (axe as any) : (axe as any).default || axe;
    const results = await runner.run(container);
    // write a11y report for CI artifact collection
    try {
      const reportsDir = path.resolve(process.cwd(), 'reports');
      if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir);
      fs.writeFileSync(path.join(reportsDir, 'a11y-about.json'), JSON.stringify(results, null, 2));
    } catch (e) {
      // ignore write errors in tests
    }
    expect(results.violations).toHaveLength(0);
  }, 10000);
});
