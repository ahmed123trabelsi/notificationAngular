import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../views/admin/dashboard/dashboard-routing.module';
import { FrontComponent } from './front/front.component';
import { HomeRoutingModule } from '../views/front/home/home-routing.module';
import { LeaveAdminRoutingModule } from '../views/admin/leave-admin/leave-admin-routing.module';
import { EmployeeRoutingModule } from '../views/admin/employee/employee-routing.module';
import { ReversePipe } from './admin-layout/reverse-pipe.pipe';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontComponent,
    ReversePipe
  ],
  imports: [
    CommonModule,RouterModule,DashboardRoutingModule,HomeRoutingModule,
  ]
})
export class LayoutsModule { }
