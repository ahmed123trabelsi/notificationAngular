import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeTasksComponent } from './liste-tasks/liste-tasks.component';

const routes: Routes = [{path:':_id',component:ListeTasksComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
