import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'myApp', //this is used to call the AppComponent in html for rendering in the index.html page
  templateUrl: './app.component.html',//defines the html to render for the component
  styleUrls: [ './app.component.css' ]//defines the css to use for the component
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  date: Date = new Date();

  sayClicked(){
    this.name = "Clicked It!";
  }

  decreaseYear(){
    this.date.setFullYear(this.date.getFullYear() - 1);
  }

  increaseYear(){
    this.date.setFullYear(this.date.getFullYear() + 1);
  }

  resetYear(){
    this.date.setFullYear(this.date.getFullYear());
  }

}
