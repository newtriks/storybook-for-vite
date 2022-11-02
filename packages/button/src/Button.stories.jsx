import React from 'react';
import { within, userEvent, getByRole } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/7.0/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on args: https://storybook.js.org/docs/7.0/react/writing-stories/args
  args: {
    primary: true,
    label: 'Button',
  },
  tags: ['docsPage'],
};

export const Primary = {};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    primary: false,
  },
};

export const Large = {
  args: {
    size: 'large',
  },
};

export const Small = {
  // More on args: https://storybook.js.org/docs/7.0/react/writing-stories/args
  args: {
    size: 'small',
  },
};

// Tests
export const ButtonClick = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Button 1')).toBeInTheDocument();
  },
};
