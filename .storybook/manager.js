import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const portfolioTheme = create({
  base: 'light',
  brandTitle: 'Subash X24 · Portfolio Design System',
  brandUrl: '#',
  brandTarget: '_self',
  colorPrimary: '#0869f9',
  colorSecondary: '#0869f9',
  appBg: '#f6f8fc',
  appContentBg: '#ffffff',
  appBorderColor: '#e1e8f2',
  appBorderRadius: 12,
  textColor: '#131927',
  textInverseColor: '#ffffff',
  barTextColor: '#475569',
  barSelectedColor: '#0869f9',
  barBg: '#ffffff',
  inputBg: '#ffffff',
  inputBorder: '#dde4f0',
  inputTextColor: '#131927',
  fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Menlo, monospace',
});

addons.setConfig({ theme: portfolioTheme, sidebar: { showRoots: true } });
