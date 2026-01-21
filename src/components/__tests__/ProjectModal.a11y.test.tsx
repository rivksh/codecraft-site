import React from 'react';
import { render } from '@testing-library/react';
import ProjectModal from '../ProjectModal';
import fs from 'fs';
import path from 'path';

describe('ProjectModal accessibility', () => {
  it('has no detectable a11y violations when open', async () => {
    const { container } = render(
      <ProjectModal
        open={true}
        onClose={() => {}}
        title="A11y Test"
        description="desc"
        technologies={["React"]}
      />
    );

    // dynamic import to avoid CJS/ESM issues
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axe = await import('axe-core');
    const runner = (axe && (axe as any).run) ? (axe as any) : (axe as any).default || axe;
    const results = await runner.run(container);
    // write a11y report for CI artifact collection
    try {
      const reportsDir = path.resolve(process.cwd(), 'reports');
      if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir);
      fs.writeFileSync(path.join(reportsDir, 'a11y-projectmodal.json'), JSON.stringify(results, null, 2));
    } catch (e) {
      // ignore write errors in tests
    }
    expect(results.violations).toHaveLength(0);
  }, 20000);
});
