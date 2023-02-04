import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from '../models/IEmployee';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.css'],
})
export class SingleEmployeeComponent implements OnInit {
  @Input() employee: IEmployee | null = null;
  @Output() employeeSelected = new EventEmitter<IEmployee>();
  @Output() employeeEdited = new EventEmitter<IEmployee>();

  constructor() {}

  ngOnInit(): void {}

  onEmployeeSelect() {
    this.employee && this.employeeSelected.emit(this.employee);
  }
  onEditEmployee() {
    this.employee && this.employeeEdited.emit(this.employee);
  }
}
