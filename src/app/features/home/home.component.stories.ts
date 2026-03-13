import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { HomeComponent } from './home.component';
import { AnalyticsService } from '~core/services/analytics.service';
import { FileService } from '~core/services/storage/file.service';
import { of } from 'rxjs';

// Mock AnalyticsService with resource pattern
const mockAnalyticsService = {
  getRealtimeUsersResource: () => ({
    value: () => ({ activeUsers: 42 }),
    reload: () => {},
  }),
};

// Mock FileService
const mockFileService = {
  getFileAsText: (_url: string) =>
    of('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#4285f4"/></svg>'),
};

// Custom image loader for Cloudinary images
const customImageLoader = (config: ImageLoaderConfig) => {
  if (config.src.startsWith('http')) {
    return config.src;
  }
  return `https://res.cloudinary.com/ismaestro/image/upload/${config.src}`;
};

const meta: Meta<HomeComponent> = {
  title: 'Features/Home/HomeComponent',
  component: HomeComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideHttpClient(),
        { provide: AnalyticsService, useValue: mockAnalyticsService },
        { provide: FileService, useValue: mockFileService },
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
