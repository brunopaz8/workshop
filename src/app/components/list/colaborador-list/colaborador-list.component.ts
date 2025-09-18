import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorService } from '../../../services/colaborador.service';
import { Colaborador } from '../../../model/colaboradores.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaborador-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './colaborador-list.component.html',
  styleUrls: ['./colaborador-list.component.css']
})
export class ColaboradorListComponent implements OnInit {
  colaboradores: Colaborador[] = [];
  selectedColaborador: Colaborador | null = null;
  termoPesquisa: string = ''; 

  constructor(private colaboradorService: ColaboradorService) {}

  ngOnInit(): void {
    this.carregarColaboradores();
  }

  carregarColaboradores(): void {
    this.colaboradorService.getAll().subscribe({
      next: (data) => this.colaboradores = data,
      error: (err) => console.error('Erro ao carregar colaboradores', err)
    });
  }

  pesquisarColaboradores(): void {
    if (!this.termoPesquisa.trim()) {
      this.carregarColaboradores(); 
      return;
    }

    this.colaboradorService.getByName(this.termoPesquisa).subscribe({
      next: (data) => this.colaboradores = data,
      error: (err) => console.error('Erro ao pesquisar colaboradores', err)
    });
  }

  verDetalhes(colab: Colaborador): void {
    this.selectedColaborador = this.selectedColaborador?.id === colab.id ? null : colab;
  }
  
  excluirColaborador(id: number) {
    if (confirm('Tem certeza que deseja excluir este colaborador?')) {
      this.colaboradorService.delete(id).subscribe({
        next: () => {
          this.colaboradores = this.colaboradores.filter(c => c.id !== id);
          if (this.selectedColaborador?.id === id) {
            this.selectedColaborador = null;
          }
        },
        error: (err) => console.error('Erro ao excluir colaborador:', err)
      });
    }
  }
}
