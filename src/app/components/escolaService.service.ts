import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscolaServiceService {

  private baseUrl = 'http://localhost:4567';

  constructor(private http: HttpClient) { 
}

getStudentById(id: string): Observable<any> {
  const url = `${this.baseUrl}/students/${id}`;
  return this.http.get<any>(url)
    .pipe(
      catchError(error => {
        console.error('Erro:', error);
        return throwError(error); // Retorna um Observable com o erro
      })
    );
}

updateStudent(id: string, studentData: any): Observable<any> {
  const url = `${this.baseUrl}/students/${id}`;
  return this.http.put(url, studentData)
    .pipe(
      catchError(error => {
        console.error('Erro:', error);
        throw error;
      })
    );
}

addStudent(studentData: any): Observable<any> {
  const url = `${this.baseUrl}/students`;
  return this.http.post(url, studentData)
    .pipe(
      catchError(error => {
        console.error('Erro:', error);
        throw error;
      })
    );
}

addStudents(classroomId: string, studentData: any): Observable<any> {
  const url = `${this.baseUrl}/students/${classroomId}`;
  return this.http.post(url, studentData)
    .pipe(
      catchError(error => {
        console.error('Erro:', error);
        throw error;
      })
    );
}

getAllClassroom(): Observable<string[]> {
  const url = `${this.baseUrl}/classrooms`;
  return this.http.get<string[]>(url);
}

}