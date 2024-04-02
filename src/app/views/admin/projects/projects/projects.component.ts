import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import Swal from 'sweetalert2';
import moment from 'moment';
import { NotifcationServiceService } from '../../../../layouts/admin-layout/notifcation-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  implements OnInit {
  projects: any[] = [];
  selectedProjectId!: string;
  p!: any;



  constructor(private projectService: ProjectServiceService, private R: Router,private renderer: Renderer2, @Inject(DOCUMENT) private document: Document,  private formBuilder: FormBuilder, private actR: ActivatedRoute,private notificationService:NotifcationServiceService) { }

  loadScript(src: string) {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(this.document.body, script);
  }
  ngOnInit() {
    this.projectService.getProjects().subscribe(data => this.projects =data);
  
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
        this.projectService.deleteProject(id).subscribe(() => {
          Swal.fire(
            'Supprimé!',
            'Votre projet a été supprimé.',
            'success'
          );
          this.ngOnInit(); // Ou une autre méthode pour actualiser la liste des projets
        }, (error) => {
          // Gérer l'erreur ici, par exemple :
          Swal.fire(
            'Erreur!',
            'La suppression du projet a échoué.',
            'error'
          );
        });
      }
    });}
    add(f: NgForm) {
      const maProjet: any = {
        "NomProject": f.value.NomProject,
        "StartDate": moment(f.value.StartDate).format('DD/MM/YYYY'),
        "FinishDate": moment(f.value.FinishDate).format('DD/MM/YYYY'),
        "NomChefProjet": f.value.NomChefProjet,
        "description": f.value.description ,
        "priority": f.value.priority ,
        "statut": f.value.statut,
      };
    
      this.projectService.createProject(maProjet).subscribe(() => {
        // Once the project is successfully added, call the notification service
        const notificationDetails = {
          title: 'New Project Added',
          description: `Project ${maProjet.NomProject} has been successfully added.`,
     
        };
    
        this.notificationService.createNotification( notificationDetails).subscribe(() => {
          alert('Project added and notification sent!');
        }, error => {
          console.error('Error sending notification', error);
        });
    
        this.ngOnInit();
      }, error => {
        console.error('Error adding project', error);
      });
    }



}