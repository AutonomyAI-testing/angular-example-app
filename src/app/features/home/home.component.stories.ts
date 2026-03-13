import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { AnalyticsService } from '~core/services/analytics.service';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

// Mock AnalyticsService to avoid actual HTTP calls
const mockAnalyticsService = {
  getRealtimeUsersResource: () => ({
    value: () => ({ activeUsers: 42 }),
    reload: () => {},
  }),
};

// Custom image loader for Cloudinary images
const customImageLoader = (config: ImageLoaderConfig) => {
  if (config.src.startsWith('http')) {
    return config.src;
  }
  return `https://res.cloudinary.com/${config.src}`;
};

const meta: Meta<HomeComponent> = {
  title: 'Features/Home/HomeComponent',
  component: HomeComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideHttpClient(),
        { provide: AnalyticsService, useValue: mockAnalyticsService },
        { provide: IMAGE_LOADER, useValue: customImageLoader },
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const Default: Story = {};
