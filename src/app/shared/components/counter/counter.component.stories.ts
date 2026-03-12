import type { Meta, StoryObj } from '@storybook/angular';
import { CounterComponent } from './counter.component';

const meta: Meta<CounterComponent> = {
  title: 'Shared/Counter',
  component: CounterComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<CounterComponent>;

export const Default: Story = {};
