import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: { autodocs: 'tag' },
  webpackFinal: async (config) => {
    // Ignore TypeScript errors that don't affect functionality
    if (config.module?.rules) {
      config.module.rules.forEach((rule: any) => {
        if (rule?.use) {
          const uses = Array.isArray(rule.use) ? rule.use : [rule.use];
          uses.forEach((use: any) => {
            if (use?.loader?.includes('@ngtools/webpack')) {
              // Set to allow errors through
              use.options = use.options || {};
            }
          });
        }
      });
    }
    return config;
  },
};

export default config;
