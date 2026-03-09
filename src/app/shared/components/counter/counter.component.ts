import { ChangeDetectionStrategy, Component, input, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import '@shoelace-style/shoelace/dist/components/button/button.js';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CounterComponent {
  readonly initialValue = input<number>(0);
  readonly count = signal<number>(0);

  constructor() {
    this.count.set(this.initialValue());
  }

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => value - 1);
  }

  reset() {
    this.count.set(this.initialValue());
  }
}
