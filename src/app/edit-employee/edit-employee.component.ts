import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from '../models/IEmployee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent {
  @Input() employee!: IEmployee;
  @Output() employeeUpdated = new EventEmitter<IEmployee>();
  name: string = '';
  address: string = '';
  contact: number=91;
  email: string = '';

  ngOnChanges() {
    this.name = this.employee.name;
    this.address = this.employee.address;
    this.contact = this.employee.contact;
    this.email = this.employee.email;

  }

  onUpdateEmployee() {
    let employee: IEmployee = {
      name: this.name,
      address: this.address,
      contact: this.contact,
      email: this.email,
    };
    this.employeeUpdated.emit(employee);
  }
}
