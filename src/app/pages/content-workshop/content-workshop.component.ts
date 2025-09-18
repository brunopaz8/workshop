import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Workshop } from '../../model/workshop.model';
import { WorkshopService } from '../../services/workshop.service';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from "../../components/menus/menu-title/menu-title.component";
import { HomeColaboradorComponent } from "../home-colaborador/home-colaborador.component";
import { MenuFooterComponent } from "../../components/menus/menu-footer/menu-footer.component";
import { MenuTitleEstatisticaComponent } from "../../components/menus/menu-title-estatistica/menu-title-estatistica.component";


@Component({
  selector: 'app-content-workshop',
  standalone: true,
  imports: [CommonModule, MenuFooterComponent, MenuTitleEstatisticaComponent, RouterLink],
  templateUrl: './content-workshop.component.html',
  styleUrls: ['./content-workshop.component.css']
})
export class ContentWorkshopComponent implements OnInit {
  workshop: Workshop | null = null;
  totalInscritos: number = 0;
  totalPresentes: number = 0;
  totalAusentes: number = 0;

  constructor(
    private route: ActivatedRoute,
    private workshopService: WorkshopService
  ) {}

  

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      if (id) {
        this.carregarWorkshop(id);
      }
    }

    carregarWorkshop(id: number) {
      this.workshopService.getById(id).subscribe({
        next: (w) => {
          this.workshop = w;
          this.totalInscritos = w.colaboradores?.length || 0;
          this.totalPresentes = w.colaboradores?.filter(c => c.presente).length || 0;
          this.totalAusentes = this.totalInscritos - this.totalPresentes;
        },
        error: (err) => console.error('Erro ao carregar workshop:', err)
      });
    }

}
