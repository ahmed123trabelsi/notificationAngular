import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  private apiUrl = 'http://localhost:3000/task'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTaskById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  createTask2(createTaskDto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/post`, createTaskDto);
  }
}
