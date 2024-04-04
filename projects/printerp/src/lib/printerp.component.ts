import {Component, Inject} from '@angular/core';
import { INFO_TOKEN } from 'commonp';

@Component({
  selector: 'lib-printerp',
  standalone: true,
  imports: [],
  template: `
    <p>
      printerp works! {{name}} {{country}}
    </p>
  `,
  styles: ``
})
export class PrinterpComponent {
  name: string = 'default';
  country: string = 'default';
  constructor(@Inject(INFO_TOKEN) private info: any) {
    console.log('info', this.info.name, this.info.country);
    this.name = this.info.name;
    this.country = this.info.country;
  }
}
