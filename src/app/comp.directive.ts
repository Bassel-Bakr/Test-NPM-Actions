import { Directive } from '@angular/core';

@Directive({
  selector: '[appDsada]',
})
export class CompDirective {
  constructor() {
    console.log(MyCoolModel.name);
  }
}

class MyCoolModel {}
