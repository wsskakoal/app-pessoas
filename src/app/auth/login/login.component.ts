import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule
  ],
})

export class LoginComponent {
  username = '';
  password = '';
  erro = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.erro = !this.authService.login(this.username, this.password);
    if (!this.erro) this.router.navigate(['/pessoas']);
  }
}
