import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ListarComponent } from './pessoas/listar/listar.component';
import { FormularioComponent } from './pessoas/formulario/formulario.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'pessoas',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListarComponent },
      { path: 'novo', component: FormularioComponent },
      { path: 'editar/:id', component: FormularioComponent },
    ]
  },
  { path: '**', redirectTo: 'login' }
];
