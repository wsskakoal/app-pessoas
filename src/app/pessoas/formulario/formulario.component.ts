import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormularioComponent {
  pessoa: Pessoa = { id: 0, nome: '', email: '', idade: 0 };
  editando = false;

  constructor(
    private service: PessoaService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const p = this.service.buscarPorId(id);
      if (p) this.pessoa = { ...p };
      this.editando = true;
    }
  }

  salvar() {
    if (this.editando) {
      this.service.atualizar(this.pessoa);
    } else {
      this.service.adicionar(this.pessoa);
    }
    this.router.navigate(['/pessoas']);
  }
}
