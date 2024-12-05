import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PropuestaService {
  private apiUrl = `${environment.backendUrl}/api/propuestas`;

  constructor(private http: HttpClient) {}

  createPropuesta(propuesta: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, propuesta);
  }

  getAllPropuestas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`);
  }

  deletePropuesta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/eliminar/${id}`);
  }

  updatePropuesta(id: number, propuestaData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/editar/${id}`, propuestaData);
  }

  getPropuestaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getById/${id}`);
  }
}
