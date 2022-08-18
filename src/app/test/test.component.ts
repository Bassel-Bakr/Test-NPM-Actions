import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test[num]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnChanges, AfterViewInit {
  @Input()
  a: number | undefined;

  @Input()
  b: number | undefined;

  @Input()
  c: number | undefined;

  @Input()
  num!: number | undefined;

  f = new FormControl('');

  ngAfterViewInit(): void {
    console.log({ a: this.a, b: this.b, c: this.c });
  }

  ngOnChanges(): void {
    console.log('changed');
    this.num?.toExponential();
  }
}
