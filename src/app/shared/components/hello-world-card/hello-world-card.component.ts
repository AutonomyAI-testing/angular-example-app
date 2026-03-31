import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-hello-world-card',
  imports: [],
  templateUrl: './hello-world-card.component.html',
  styleUrl: './hello-world-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldCardComponent {
  readonly title = input<string>('Hello World');
  readonly description = input<string>('Welcome to the Hello World Card component');
}
