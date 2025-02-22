import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee;
  constructor(private employeeService: EmployeeService) { }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe((data: any) => {
      console.log('create employee api response : ', data);
    }, error => console.log('error while create api : ', error));
  }
  onSubmit() {
    console.log('inside onSubmit : ', this.employee);
    this.saveEmployee();
    this.redirectToEmployeeListPage();
  }
  redirectToEmployeeListPage() {
    window.location.href = '/employee-list';
  }
}
