import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprojectComponent } from './editproject/editproject.component';
import { ProjectsModule } from './projects.module';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'',component:ProjectsComponent},  {path:'editproject/:_id',component:EditprojectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
