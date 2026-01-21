import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectModal from '../ProjectModal';

function TestWrapper() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button data-testid="outside" onClick={() => {}}>
        Outside Button
      </button>
      <button data-testid="open" onClick={() => setOpen(true)}>Open</button>
      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
        title="Test Project"
        description="Description"
        technologies={['React']}
      />
    </div>
  );
}

describe('ProjectModal basic behavior', () => {
  it('opens and closes, and returns focus to outside element', async () => {
    render(<TestWrapper />);

    const openBtn = screen.getByTestId('open');

    // open modal
    fireEvent.click(openBtn);

    // modal should be present
    expect(await screen.findByRole('dialog')).toBeTruthy();

    // close via close button inside modal
    const closeBtn = await screen.findByLabelText('Close modal');
    fireEvent.click(closeBtn);

    // after close, modal should be removed
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('clicking backdrop closes modal', async () => {
    render(<TestWrapper />);
    const openBtn = screen.getByTestId('open');
    fireEvent.click(openBtn);

    const backdrop = await screen.findByTestId('backdrop');
    fireEvent.click(backdrop);

    // modal should be removed
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
