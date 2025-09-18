// workshop.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workshop } from '../model/workshop.model';


@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  private apiUrl = 'http://localhost:5235/api/workshops';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(this.apiUrl);
  }

  getById(id: number): Observable<Workshop> {
    return this.http.get<Workshop>(`${this.apiUrl}/${id}`);
  }

  getByName(nome: string): Observable<Workshop[]> {
      return this.http.get<Workshop[]>(`${this.apiUrl}/name?name=${nome}`);
    }

  atualizarPresenca(workshopId: number, colaboradorId: number): Observable<any> {
    return this.http.put<boolean>(`${this.apiUrl}/${workshopId}/colaboradores/${colaboradorId}/presenca`, {});
  }
}
