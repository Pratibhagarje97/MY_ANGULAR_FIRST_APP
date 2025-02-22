import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CourseComponent } from './course/course.component';
import { CounterComponent } from './counter/counter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [

    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'career', component: CareerComponent },//http://localhost:4200/career
    { path: 'about', component: AboutusComponent },
    { path: 'course', component: CourseComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'employee-list', component: EmployeeListComponent},
    { path: 'create-employee', component: CreateEmployeeComponent},
    { path: 'update-employee/:id', component: UpdateEmployeeComponent},
    { path: 'employee-details/:id', component: EmployeeDetailsComponent},
    // { path: '**', redirectTo: '' }

];
