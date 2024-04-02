import { LeadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveadminComponent } from './leaveadmin/leaveadmin.component';

const routes: Routes = [
  {path:'',component:LeaveadminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveAdminRoutingModule { }
