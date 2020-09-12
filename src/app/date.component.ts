import { Component, Input } from '@angular/core';

@Component({
  selector: 'dateComponent', //this is used to call out the component in the app.component.html, where we can then use the value of the "name" string var
  template: `<h1>The current date is {{date}}</h1>`,//different than the app html, this only defines the HTML to render when the htmlComponent component is referenced in the app.component.html
  styles: [`h1 { font-family: Lato; }`]//different than a static css file, the css is defined in place.
})
export class DateComponent  {
  @Input() date: string;
}
