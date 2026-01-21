import React from 'react';
import { render } from '@testing-library/react';
import ProjectModal from '../ProjectModal';

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
    expect(results.violations).toHaveLength(0);
  }, 20000);
});
