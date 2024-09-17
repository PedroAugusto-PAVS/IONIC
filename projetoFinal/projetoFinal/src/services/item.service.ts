import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'http://localhost/apisIonic/api/itens.php';  // URL do seu backend PHP

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Cabeçalhos para autenticação com token JWT
  getHeaders() {
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }

  // Obter itens
  getItens(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, this.getHeaders());
  }

  // Adicionar item
  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item, this.getHeaders());
  }

  // Editar item (método faltando)
  editItem(id: number, item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}`, { id, ...item }, this.getHeaders());
  }

  // Excluir item
  deleteItem(id: number): Observable<any> {
    return this.http.request('delete', this.apiUrl, {
      body: { id },
      ...this.getHeaders()
    });
  }

  // Logout
  logout() {
    this.authService.logout();
  }
}
