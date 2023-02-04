import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[] = [
    
  ];

  selectedEmployee: IEmployee | null = null;
  editEmployeeDetails: IEmployee | null = null;

  constructor() {}

  ngOnInit(): void {}

  onEmployeeAdd(employee: IEmployee) {
    debugger;
    this.employees.push(employee);
  }

  onEmployeeSelected(employee: IEmployee) {
    this.selectedEmployee = employee;
    this.editEmployeeDetails = null;
  }

  onEmployeeEdited(employee: IEmployee) {
    this.editEmployeeDetails = employee;
    this.selectedEmployee = null;
  }

  onUpdateEmployee(employee: IEmployee) {
    this.employees = this.employees.map((emp:any) => {
      if (employee.name === emp.name) {
        return employee;
      }
      return emp;
    });
  }
}
