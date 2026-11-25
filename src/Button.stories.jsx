import { Button } from './Button.jsx';

const Arrow = () => <svg viewBox="0 0 24 24" focusable="false"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>;

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'View work',
    variant: 'primary',
    size: 'medium',
    type: 'button',
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    iconPosition: { control: 'inline-radio', options: ['leading', 'trailing'] },
    icon: { control: false },
  },
};

export const Primary = {};

export const Secondary = {
  args: { variant: 'secondary' },
};

export const Small = {
  args: { size: 'small' },
};

export const Large = {
  args: { size: 'large' },
};

export const Disabled = {
  args: { disabled: true },
};

export const DisabledSecondary = {
  args: { variant: 'secondary', disabled: true },
};

export const WithLeadingIcon = {
  args: { icon: <Arrow />, iconPosition: 'leading' },
};

export const WithTrailingIcon = {
  args: { icon: <Arrow /> },
};

export const FullWidth = {
  args: { fullWidth: true },
};

export const SizeAndVariantMatrix = {
  render: () => (
    <table style={{ borderCollapse: 'separate', borderSpacing: '12px' }}>
      <caption style={{ textAlign: 'left', paddingBottom: '8px' }}>Button size and variant overview</caption>
      <thead>
        <tr><th scope="col">Size</th><th scope="col">Primary</th><th scope="col">Secondary</th></tr>
      </thead>
      <tbody>
        {['small', 'medium', 'large'].map((size) => (
          <tr key={size}>
            <th scope="row">{size}</th>
            <td><Button size={size}>Continue</Button></td>
            <td><Button size={size} variant="secondary">Cancel</Button></td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
