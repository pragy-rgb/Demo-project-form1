import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(public service: EmployeeService) {}
  fullName:string

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' },
  ];

  ngOnInit() {}
  saveEmployee() {
    
    console.log(this.service.form.value);
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }
}
