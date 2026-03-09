import type { Meta, StoryObj } from '@storybook/angular';
import { CounterComponent } from './counter.component';

const meta: Meta<CounterComponent> = {
  title: 'Shared/Counter',
  component: CounterComponent,
  decorators: [
    (story) => {
      const result = story();
      return {
        ...result,
        template: `<div class="theme-light--mode" style="padding: 2rem;">${result.template || '<app-counter></app-counter>'}</div>`,
      };
    },
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<CounterComponent>;

export const Default: Story = {};
