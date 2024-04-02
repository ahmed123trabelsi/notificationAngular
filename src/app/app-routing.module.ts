import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontComponent } from './layouts/front/front.component';

const routes: Routes = [
  {path:'admin', component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'allemployee',loadChildren:()=>import('./views/admin/employee/employee.module').then(m => m.EmployeeModule)},
    {path:'projects',loadChildren:()=>import('./views/admin/projects/projects.module').then(m => m.ProjectsModule)},
    {path:'leaveadmin',loadChildren:()=>import('./views/admin/leave-admin/leave-admin.module').then(m => m.LeaveAdminModule)},
    {path:'holidays',loadChildren:()=>import('./views/admin/holidays/holidays.module').then(m => m.HolidaysModule)},
    {path:'tasks',loadChildren:()=>import('./views/admin/tasks/tasks.module').then(m => m.TasksModule)},
  ]
},
{path:'',component:FrontComponent,children:[
  {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
