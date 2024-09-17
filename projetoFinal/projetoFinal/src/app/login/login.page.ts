import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  senha: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.http.post('http://localhost/apisIonic/api/login.php', {
      email: this.email,
      senha: this.senha
    }).subscribe((response: any) => {
      if (response.success) {
        localStorage.setItem('usuarios_id', response.usuarios_id);
        this.router.navigate(['/itens']);
      } else {
        alert('Falha no Login');
      }
    });
  }
}
