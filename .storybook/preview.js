import '../src/tokens.css';
import '../src/components/components.css';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
    layout: 'centered',
    backgrounds: {
      options: {
        light: { name: 'light', value: '#f6f8fc' },
        white: { name: 'white', value: '#ffffff' },
        dark: { name: 'dark', value: '#111827' }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
};
