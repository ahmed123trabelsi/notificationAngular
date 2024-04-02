import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveAdminRoutingModule } from './leave-admin-routing.module';
import { LeaveadminComponent } from './leaveadmin/leaveadmin.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LeaveadminComponent
  ],
  imports: [
    CommonModule,
    LeaveAdminRoutingModule,RouterModule
  ]
})
export class LeaveAdminModule { }
