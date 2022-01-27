import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>My App</h1>',
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
