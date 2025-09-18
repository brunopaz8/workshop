import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkshopService } from '../../../services/workshop.service';
import { Workshop } from '../../../model/workshop.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-workshop-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {
  workshops: Workshop[] = [];
  selectedWorkshop: Workshop | null = null;
  termoPesquisa: string = '';

  constructor(private workshopService: WorkshopService) {}

  ngOnInit(): void {
    this.carregarWorkshops();
  }

  carregarWorkshops(): void {
    this.workshopService.getAll().subscribe({
      next: (data) => this.workshops = data,
      error: (err) => console.error('Erro ao carregar workshops', err)
    });
  }

  pesquisarWorkshops(): void {
    if (!this.termoPesquisa.trim()) {
      this.carregarWorkshops();
      return;
    }

    this.workshopService.getByName(this.termoPesquisa).subscribe({
      next: (data) => this.workshops = data,
      error: (err) => console.error('Erro ao pesquisar workshops', err)
    });
  }

  verDetalhes(workshop: Workshop): void {
    this.selectedWorkshop = this.selectedWorkshop?.id === workshop.id ? null : workshop;
  }

  atualizarPresenca(workshopId: number, colaboradorId: number): void {
    this.workshopService.atualizarPresenca(workshopId, colaboradorId).subscribe({
      next: () => {
        const ws = this.workshops.find(w => w.id === workshopId);
        if (ws) {
          const colab = ws.colaboradores?.find(c => c.id === colaboradorId);
          if (colab) colab.presente = !colab.presente;
        }
      },
      error: (err) => console.error('Erro ao atualizar presença:', err)
    });
  }

}
