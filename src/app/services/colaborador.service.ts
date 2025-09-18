import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador } from '../model/colaboradores.model';


@Injectable({ providedIn: 'root' })
export class ColaboradorService {
  private apiUrl = 'http://localhost:5235/api/colaboradores';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.apiUrl);
  }

  getById(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.apiUrl}/${id}`);
  }

  getByName(nome: string): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(`${this.apiUrl}/name?name=${nome}`);
  }
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
