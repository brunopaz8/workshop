import { Component } from '@angular/core';
import { MenuTitleColaboradorComponent } from '../../components/menus/menu-title-colaborador/menu-title-colaborador.component';
import { ColaboradorListComponent } from '../../components/list/colaborador-list/colaborador-list.component';
import { MenuFooterComponent } from '../../components/menus/menu-footer/menu-footer.component';


@Component({
  selector: 'app-home-colaborador',
  imports: [MenuTitleColaboradorComponent, ColaboradorListComponent, MenuFooterComponent],
  templateUrl: './home-colaborador.component.html',
  styleUrl: './home-colaborador.component.css'
})
export class HomeColaboradorComponent {

}
