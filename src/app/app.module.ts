import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SingleEmployeeComponent } from './single-employee/single-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SingleEmployeeComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [BrowserModule, FormsModule, ProgressBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
