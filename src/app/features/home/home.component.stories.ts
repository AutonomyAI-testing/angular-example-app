import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { provideHttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ENVIRONMENT } from '~core/tokens/environment.token';
import { provideLocationMocks } from '@angular/common/testing';

const meta: Meta<HomeComponent> = {
  title: 'Features/Home',
  component: HomeComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideHttpClient(),
        provideLocationMocks(),
        {
          provide: ENVIRONMENT,
          useValue: {
            apiBaseUrl: 'https://example.com/api',
            domain: false,
          },
        },
      ],
    }),
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const Default: Story = {};
