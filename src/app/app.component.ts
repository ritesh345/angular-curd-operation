import { Component,ViewEncapsulation } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-progressbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<ejs-progressbar id='percentage'  type='Linear' height='60' [value]='value' [animation]='animation'> </ejs-progressbar>`,
encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  public animation: AnimationModel = { enable: true, duration: 2000, delay: 0 };
   public value: number = 40;
}
