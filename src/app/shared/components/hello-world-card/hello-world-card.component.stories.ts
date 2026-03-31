import { HelloWorldCardComponent } from './hello-world-card.component';

export default {
  title: 'Shared/HelloWorldCard',
  component: HelloWorldCardComponent,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => ({
    template: '<app-hello-world-card></app-hello-world-card>',
  }),
};

export const CustomTitle = {
  render: () => ({
    template: '<app-hello-world-card [title]="\'Welcome to Storybook\'"></app-hello-world-card>',
  }),
};

export const CustomDescription = {
  render: () => ({
    template:
      '<app-hello-world-card [description]="\'This is a longer description to show how the card component handles text wrapping and spacing with more content.\'"></app-hello-world-card>',
  }),
};

export const FullyCustomized = {
  render: () => ({
    template:
      '<app-hello-world-card [title]="\'Angular is Awesome\'" [description]="\'This card demonstrates the power of Angular components combined with Storybook for UI development.\'"></app-hello-world-card>',
  }),
};
