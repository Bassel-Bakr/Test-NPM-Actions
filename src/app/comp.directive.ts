import { TestComponent } from './test/test.component';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dsada]',
})
export class CompDirective {
  constructor() {
    console.log(MyCoolModel.name);
  }
}

class MyCoolModel {}
