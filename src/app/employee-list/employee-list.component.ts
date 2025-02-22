import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
employee: any;
  constructor(private employeeService:EmployeeService){}
  employeeList : Employee[] = [];

  ngOnInit() {
    this.getEmployees();
  }
     getEmployees() {
      this.employeeService.getEmployees().subscribe(data => {
     data.forEach((employee) => console.log(employee));
     this.employeeList = data;
      });
      }
      updateEmployee(id: number | null) {
        console.log('inside updateEmployee method : ', id);
        window.location.href = `/update-employee/${id}`;     //redirect to update employee page
      }
      
      deleteEmployee(id: number | null) {
        console.log('inside ddeleteEmployee method : ', id);
        this.employeeService.deleteEmployee(id).subscribe((data: any) => {
          console.log('delete api response : ', data);
          this.getEmployees();
        }, error => console.log('error from delete api call : ', error));
      }
    
      viewEmployee(id: number | null) {
        console.log('inside viewEmployee');
        window.location.href = `/employee-details/${id}`;
      }
  }


