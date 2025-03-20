// university.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiUrl = 'http://localhost:3000/api/universities/';  // Backend API URL

  constructor(private http: HttpClient) {}

  // Method to fetch universities from backend
  getUniversities(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addUniversity(university: { name: string, ranking: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, university);
  }
}
