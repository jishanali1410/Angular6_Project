import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeeListComponent } from './employeee-list/employeee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
const routes : Routes = [
    {path : '', component: AppComponent},
    {path : 'departments' , component: DepartmentListComponent},
    {path : 'departments/:id' , component: DepartmentDetailComponent},
    
    {path : 'employeelist' , component: EmployeeeListComponent},
    {path : "**" , component: PageNotFoundComponent}
];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{

}
export const routingModule = [DepartmentListComponent, EmployeeeListComponent, PageNotFoundComponent, AppComponent, DepartmentDetailComponent]
