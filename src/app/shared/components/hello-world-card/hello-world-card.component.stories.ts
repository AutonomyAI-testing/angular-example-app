import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HelloWorldCardComponent } from './hello-world-card.component';

const meta: Meta<HelloWorldCardComponent> = {
  title: 'Shared/HelloWorldCard',
  component: HelloWorldCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    moduleMetadata({
      imports: [HelloWorldCardComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<HelloWorldCardComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="theme-dark--mode" style="padding: 20px; background-color: #1a1a1a; min-height: 100vh;"><app-hello-world-card [title]="title" [description]="description"></app-hello-world-card></div>`,
  }),
  args: {
    title: 'Hello World',
    description: 'Welcome to the hello world card component',
  },
};

export const CustomTitle: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="theme-dark--mode" style="padding: 20px; background-color: #1a1a1a; min-height: 100vh;"><app-hello-world-card [title]="title" [description]="description"></app-hello-world-card></div>`,
  }),
  args: {
    title: 'Welcome to Storybook',
    description: 'This is a beautiful card component with custom styling and hover effects.',
  },
};

export const LongContent: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="theme-dark--mode" style="padding: 20px; background-color: #1a1a1a; min-height: 100vh;"><app-hello-world-card [title]="title" [description]="description"></app-hello-world-card></div>`,
  }),
  args: {
    title: 'Advanced Card Component',
    description:
      'This card demonstrates how the component handles longer text content. The card maintains proper spacing, typography, and visual hierarchy with the design system CSS variables. The hover effect provides visual feedback to users.',
  },
};
