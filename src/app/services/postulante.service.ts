import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs/operators';  // Asegúrate de importar map correctamente

@Injectable({
  providedIn: 'root',
})
export class PostulanteService {
  private apiUrl = `${environment.backendUrl}/api/postulantes`;

  // Usamos un BehaviorSubject para manejar el estado de los postulantes
  private postulantesSubject = new BehaviorSubject<any[]>([]);
  postulantes$ = this.postulantesSubject.asObservable();  // Exponemos como un observable

  constructor(private http: HttpClient) {}

  createPostulante(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
  }

  // Método para obtener postulantes por área
  getPostulantesByArea(area: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getByArea/${area}`);
  }

  getPostulanteById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getById/${id}`).pipe(
      map((postulante) => {
        // Verificar si la URL del CV es válida
        if (postulante?.cv && !postulante.cv.startsWith('http')) {
          postulante.cv = `${environment.backendUrl}/uploads/${postulante.cv}`; // Genera la URL completa
        }
        return postulante;
      })
    );
  }

  // Método para obtener el archivo del CV
  // Esto no es estrictamente necesario si ya estás pasando la URL directamente, pero es una opción
  downloadCV(cv: string): Observable<Blob> {
    return this.http.get(cv, { responseType: 'blob' });
  }

  // Método para establecer postulantes en el servicio
  setPostulantes(postulantes: any[]): void {
    this.postulantesSubject.next(postulantes);  // Actualiza el valor del BehaviorSubject
  }

  // Método para obtener los postulantes almacenados en el servicio
  getPostulantes(): any[] {
    return this.postulantesSubject.getValue();  // Obtiene el valor actual del BehaviorSubject
  }

  deletePostulante(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
}
