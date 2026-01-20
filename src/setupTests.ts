import '@testing-library/jest-dom';
// Mock focus-trap-react in tests to avoid lifecycle/hook complexities from the real library.
import { vi } from 'vitest';
import React from 'react';

vi.mock('focus-trap-react', () => {
	return {
		default: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
	};
});
