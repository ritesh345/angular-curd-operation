import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEmployee } from '../models/IEmployee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  name: string = '';
  address: string = '';
  contact: number=91;
  email: string = '';

  @Output() employeeAdded = new EventEmitter<IEmployee>();

  constructor() {}
  public pbwidth:number=0;
  
  ngOnInit(): void {
    
  }
  
  onAddEmployee() {
    debugger;
    let employee: IEmployee = {
      name: this.name,
      address: this.address,
      contact: this.contact,
      email: this.email,

    };
    if(this.pbwidth>=1000){
      return;
    }
    this.pbwidth=100+this.pbwidth;
    const element= <HTMLElement>document.getElementsByClassName("pbar")[0];
    element.style.width=this.pbwidth+"px";
    this.employeeAdded.emit(employee);
  }
}
