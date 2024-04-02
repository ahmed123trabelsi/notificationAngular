import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {



    private baseUrl = 'http://localhost:3000/project'; // Ajustez selon votre configuration
  
    constructor(private http: HttpClient) {}
  
    createProject(project: any): Observable<any> {
      return this.http.post(`${this.baseUrl}`, project);
    }
  
    getProjects(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}`);
    }
  
    getProjectById(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    updateProject(id: string, project: any): Observable<any> {
      return this.http.patch(`${this.baseUrl}/${id}`, project);
    }
  
    deleteProject(id: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }
    
  }
  
