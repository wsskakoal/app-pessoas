import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { PessoasModule } from '../pessoas/pessoas.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    PessoasModule
  ]
})
export class AppModule { }
