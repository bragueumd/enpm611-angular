import { Component, Input } from '@angular/core';

@Component({
  selector: 'helloComponent', //this is used to call out the component in the app.component.html, where we can then use the value of the "name" string var
  template: `<h2>Hello {{name}}!</h2>`,//different than the app html, this only defines the HTML to render when the htmlComponent component is referenced in the app.component.html
  styles: [`h1 { font-family: Lato; }`]//different than a static css file, the css is defined in place.
})
export class HelloComponent  {
  @Input() name: string;
}
