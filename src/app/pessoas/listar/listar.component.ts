import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ListarComponent {
  pessoas: Pessoa[] = [];
  pagina = 1;
  tamanho = 5;
  total = 0;

  constructor(private service: PessoaService, private router: Router) {
    this.carregar();
  }

  carregar() {
    const result = this.service.listar(this.pagina, this.tamanho);
    this.pessoas = result.data;
    this.total = result.total;
  }

  excluir(id: number) {
    this.service.excluir(id);
    this.carregar();
  }

  proxima() {
    if (this.pagina * this.tamanho < this.total) this.pagina++;
    this.carregar();
  }

  anterior() {
    if (this.pagina > 1) this.pagina--;
    this.carregar();
  }

  navigateToNewPessoa(){
    this.router.navigate(['/pessoas/novo'])
  }

  navigateToEditPessoa(id: number) {
    this.router.navigate(['/pessoas/editar', id]);
  }
  
  navigateToViewPessoa(id: number) {
    this.router.navigate(['/pessoas/visualizar', id]);    
  }
}
