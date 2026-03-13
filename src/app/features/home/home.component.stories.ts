import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { AnalyticsService } from '~core/services/analytics.service';
import { ENVIRONMENT } from '~core/tokens/environment.token';
import { environment } from '~environments/environment';

// Mock AnalyticsService that returns static data
const mockAnalyticsService = {
  getRealtimeUsersResource: () => ({
    value: () => ({ activeUsers: 42 }),
    reload: () => {},
  }),
};

const meta: Meta<HomeComponent> = {
  title: 'Features/Home/HomeComponent',
  component: HomeComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    applicationConfig({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimations(),
        { provide: ENVIRONMENT, useValue: environment },
        { provide: AnalyticsService, useValue: mockAnalyticsService },
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const Default: Story = {
  args: {},
};
