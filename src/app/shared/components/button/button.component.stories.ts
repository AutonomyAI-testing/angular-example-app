import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Shared/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => {
      const result = story();
      return {
        ...result,
        template: `<div class="theme-light--mode" style="padding: 2rem;">${result.template || '<app-button></app-button>'}</div>`,
      };
    },
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'icon', 'as-link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    text: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
    text: 'Click Me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
    text: 'Secondary Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    text: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    text: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    text: 'Disabled Button',
  },
};

export const AsLink: Story = {
  args: {
    variant: 'as-link',
    size: 'md',
    text: 'Link Button',
  },
};
