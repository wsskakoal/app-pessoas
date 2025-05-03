import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private pessoas: Pessoa[] = [];
  private idCounter = 1;

  constructor() {
    for (let i = 1; i <= 30; i++) {
      this.pessoas.push({ id: this.idCounter++, nome: `Pessoa ${i}`, email: `pessoa${i}@teste.com`, idade: 20 + i });
    }
  }

  listar(pagina: number, tamanho: number): { data: Pessoa[], total: number } {
    const start = (pagina - 1) * tamanho;
    return {
      data: this.pessoas.slice(start, start + tamanho),
      total: this.pessoas.length
    };
  }

  adicionar(p: Pessoa): void {
    p.id = this.idCounter++;
    this.pessoas.push(p);
  }

  atualizar(p: Pessoa): void {
    const index = this.pessoas.findIndex(x => x.id === p.id);
    if (index >= 0) this.pessoas[index] = p;
  }

  excluir(id: number): void {
    this.pessoas = this.pessoas.filter(p => p.id !== id);
  }

  buscarPorId(id: number): Pessoa | undefined {
    return this.pessoas.find(p => p.id === id);
  }
}
