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

    const outside = screen.getByTestId('outside');
    const openBtn = screen.getByTestId('open');

    // focus outside button
    outside.focus();
    expect(document.activeElement).toBe(outside);

    // open modal
    fireEvent.click(openBtn);

    // close via close button inside modal
    const closeBtn = await screen.findByLabelText('Close modal');
    fireEvent.click(closeBtn);

    // after close, focus should return to the previously focused outside element
    expect(document.activeElement).toBe(outside);
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
