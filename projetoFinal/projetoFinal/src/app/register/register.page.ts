import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  senha: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  register() {
    this.http.post('http://localhost/apisIonic/api/register.php', {
      email: this.email,
      senha: this.senha
    }).subscribe((response: any) => {
      if (response.success) {
        this.router.navigate(['/login']);
      } else {
        alert('Erro ao Cadastrar');
      }
    });
  }
}
