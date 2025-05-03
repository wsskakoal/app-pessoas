import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly usuarioMock = { username: 'admin', password: '123' };
  private logado = false;

  login(username: string, password: string): boolean {
    this.logado = username === this.usuarioMock.username && password === this.usuarioMock.password;
    return this.logado;
  }

  logout(): void {
    this.logado = false;
  }

  isAuthenticated(): boolean {
    return this.logado;
  }
}
