import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  id!: number;
  employee: Employee = new Employee;
  constructor(private employeeService: EmployeeService) { };

  ngOnInit() {
    this.id = parseInt(window.location.pathname.split('/').pop() || '0');
    this.employeeService.getEmployeeById(this.id).subscribe((data: Employee) => {
      console.log('get employee by id response : ', data);
      this.employee = data;
    }, error => console.log('error while calling get employee by id api : ', error));
  }

  onSubmit() {
    console.log('inside onSubmit in update employee component')
    this.employeeService.updateEmployee(this.id, this.employee).subscribe((data: Object) => {
      console.log('reponse from put api : ', data);
    }, error => console.log('error from put api : ', error));
    //redirect employee list page
    this.redirectToEmployeeListPage();
  }

  redirectToEmployeeListPage() {
    window.location.href = '/employee-list';
  }
}
