import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';
import { ProjectServiceService } from '../project-service.service';





@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrl: './editproject.component.css'
})
export class EditprojectComponent  implements OnInit{
  myForm!: FormGroup;
  _id!: string;
  project!:any
  constructor(private projectService: ProjectServiceService, private R: Router,private renderer: Renderer2, @Inject(DOCUMENT) private document: Document,  private formBuilder: FormBuilder, private actR: ActivatedRoute){}
  loadScript(src: string) {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(this.document.body, script);
  }
  ngOnInit(): void {
    
  
    this.loadScript('assets/js/select2.min.js');
    this.loadScript('assets/js/moment.min.js');
    this.loadScript('assets/js/bootstrap-datetimepicker.min.js');
    this.loadScript('assets/plugins/summernote/dist/summernote-bs4.min.js');
    this.loadScript('assets/js/app.js');
    this.myForm = this.formBuilder.group({
      _id: [''],
      NomProject: [''],
      description: [''],
      StartDate: [''],
      FinishDate : [''],
      statut: [''],
      priority : [''],
      NomChefProjet:  [''],
    });
 
    this._id = this.actR.snapshot.params['_id'];
    this.projectService.getProjectById(this._id).subscribe((data) => {
     
      this.project= data;
      const PSansT = {
        _id: this.project._id,
        NomProject: this.project.NomProject,
        description: this.project.description,
        StartDate : this.project.StartDate ,
        FinishDate : this.project.FinishDate ,
        statut : this.project.statut ,
        priority : this.project.priority ,
        NomChefProjet: this.project.NomChefProjet
      };
  
      this.myForm.patchValue(PSansT );
    
     
    });
   
  }
  
  // EDIT
  updateP() {
    const updatedValues = {
      _id: this.myForm.value._id,
      NomProject: this.myForm.value.NomProject,
      description: this.myForm.value.description,
      "StartDate": moment(this.myForm.value.StartDate).format('DD/MM/YYYY'), // Converts to string in specified format
      "FinishDate": moment(this.myForm.value.FinishDate).format('DD/MM/YYYY'),
      statut: this.myForm.value.statut,
      priority: this.myForm.value.priority,
      NomChefProjet: this.myForm.value.NomChefProjet,
      tasks: this.project.tasks
      // Incluez 'f' si vous ne le mettez pas à jour ici
    };
  
    this.projectService.updateProject(this._id, updatedValues).subscribe(() => {
    
      this.R.navigate(['/admin/projects']);
    });
  }
  

}