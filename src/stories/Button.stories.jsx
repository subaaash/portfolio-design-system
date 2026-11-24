import { fn } from 'storybook/test';
import { Button } from './Button';
import React from 'react';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const states = ['Default', 'Hover', 'Pressed', 'Disabled'];

const StateMatrix = ({ variant }) => (
  <div className="button-state-matrix" role="group" aria-label={`${variant} button states`}>
    {states.map((state) => (
      <div className="button-state-matrix__item" key={state}>
        <span className="button-state-matrix__label">{state}</span>
        <Button
          variant={variant}
          size="medium"
          label="Button"
          disabled={state === 'Disabled'}
          data-preview-state={state.toLowerCase() === 'default' ? undefined : state.toLowerCase()}
        />
      </div>
    ))}
  </div>
);

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { label: 'Button', onClick: fn() },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    trailingIcon: { control: false, table: { category: 'Optional content' } },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
  },
};

export const Primary = {
  args: { variant: 'primary', size: 'medium' },
};

export const Secondary = {
  args: { variant: 'secondary', size: 'medium' },
};

export const Sizes = {
  render: () => (
    <div className="button-size-showcase">
      {['small', 'medium', 'large'].map((size) => (
        <div className="button-size-showcase__row" key={size}>
          <span className="button-size-showcase__label">{size}</span>
          <Button variant="primary" size={size} label="Primary" />
          <Button variant="secondary" size={size} label="Secondary" />
        </div>
      ))}
    </div>
  ),
};

export const PrimaryStates = {
  render: () => <StateMatrix variant="primary" />,
};

export const SecondaryStates = {
  render: () => <StateMatrix variant="secondary" />,
};

export const WithTrailingIcon = {
  args: { variant: 'primary', size: 'medium' },
  render: (args) => <Button {...args} trailingIcon={<ArrowIcon />} />,
};
