import { Component, Inject, Renderer2 } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import moment from 'moment';
import { ProjectServiceService } from '../../projects/project-service.service';

@Component({
  selector: 'app-liste-tasks',
  templateUrl: './liste-tasks.component.html',
  styleUrl: './liste-tasks.component.css'
})
export class ListeTasksComponent  {

tasks: any[] = [];
selectedProjectId!: string;
p!: any;



constructor(private PService: ProjectServiceService,private taskService: TaskserviceService, private R: Router,private renderer: Renderer2, @Inject(DOCUMENT) private document: Document,  private formBuilder: FormBuilder, private actR: ActivatedRoute) { }

loadScript(src: string) {
  const script = this.renderer.createElement('script');
  script.src = src;
  script.async = true;
  script.defer = true;
  this.renderer.appendChild(this.document.body, script);
}
ngOnInit(): void {
  this.actR.params.subscribe(params => {
    const _id = params['_id'];
    this.PService.getProjectById(_id).subscribe(data => {
      this.p= data; 
    
    });
  });
  this.loadScript('assets/js/select2.min.js');
  this.loadScript('assets/js/moment.min.js');
  this.loadScript('assets/js/bootstrap-datetimepicker.min.js');
  this.loadScript('assets/plugins/summernote/dist/summernote-bs4.min.js');
  this.loadScript('assets/js/app.js');

 
}
/*   selectProjectForupdate(projectId: string) {
  this.selectedProjectId = projectId;
} */



deleteProject(id: string) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimez-le!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.taskService.deleteTask(id).subscribe(() => {
        Swal.fire(
          'Supprimé!',
          'Votre task a été supprimé.',
          'success'
        );
        this.ngOnInit(); // Ou une autre méthode pour actualiser la liste des projets
      }, (error) => {
        // Gérer l'erreur ici, par exemple :
        Swal.fire(
          'Erreur!',
          'La suppression du task a échoué.',
          'error'
        );
      });
    }
  });}
add(f: NgForm) {

const maProjet: any = {
 
 "NomTask": f.value.NomTask,
/*  "startDate": moment(f.value.StartDate).format('DD/MM/YYYY'), // Converts to string in specified format
 "FinishDate": moment(f.value.FinishDate).format('DD/MM/YYYY'), */
 "employeeAffected": f.value.employeeAffected,
 "description": f.value.description ,
/*  "priority": f.value.priority ,
 "statut": f.value.statut, */
 "projectId": this.p._id,


};

this.taskService.createTask2(maProjet).subscribe(() => {this.ngOnInit() ,
 alert('project ajoutée !');

});

}
}