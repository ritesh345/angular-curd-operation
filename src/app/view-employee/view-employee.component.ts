import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../models/IEmployee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent implements OnInit {
  @Input()
  employee!: IEmployee;

  constructor() {}

  ngOnInit(): void {}
}
