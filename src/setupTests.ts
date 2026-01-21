import '@testing-library/jest-dom';
// Mock focus-trap-react in tests to avoid lifecycle/hook complexities from the real library.
import { vi } from 'vitest';
import React from 'react';

vi.mock('focus-trap-react', () => {
	return {
		default: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
	};
});

// Mock framer-motion in tests to avoid animation-related mounting/unmounting behavior
vi.mock('framer-motion', () => {
	// Use the React imported at top of this module to avoid require/type issues.
	// Filter out framer-motion specific props so they don't appear on DOM nodes during tests
	const animationProps = new Set([
		'initial', 'animate', 'exit', 'whileHover', 'whileTap', 'whileFocus', 'whileInView', 'transition', 'viewport', 'variants'
	]);

	const MotionPassthrough = (props: any) => {
		const { children, as: Component = 'div', ...rest } = props;
		const cleanProps: Record<string, any> = {};
		Object.keys(rest).forEach((k) => {
			if (!animationProps.has(k)) {
				cleanProps[k] = rest[k];
			}
		});
		return React.createElement(Component, cleanProps, children);
	};

	const motion: any = new Proxy(MotionPassthrough, {
		get: () => MotionPassthrough,
	});

	const AnimatePresence = ({ children }: { children?: React.ReactNode }) => React.createElement(React.Fragment, null, children);

	return { motion, AnimatePresence };
});
