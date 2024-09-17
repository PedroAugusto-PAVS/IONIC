import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  // Função para fazer o login
  login() {
    const credentials = { email: this.email, senha: this.senha };
    this.authService.login(credentials).subscribe(response => {
      if (response.token) {
        this.authService.saveToken(response.token);
        this.router.navigate(['/listagem']); // Redireciona para a página de listagem após login bem-sucedido
      } else {
        alert('Credenciais inválidas');
      }
    });
  }

  // Função para registro
  register() {
    const credentials = { email: this.email, senha: this.senha };
    this.authService.register(credentials).subscribe(response => {
      alert(response.message);
    });
  }
}
