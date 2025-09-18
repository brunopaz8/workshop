import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 
import { WorkshopListComponent } from '../../components/list/workshop-list/workshop-list.component';
import { MenuTitleComponent } from '../../components/menus/menu-title/menu-title.component';
import { MenuFooterComponent } from '../../components/menus/menu-footer/menu-footer.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [WorkshopListComponent, MenuTitleComponent, MenuFooterComponent], 
})
export class HomeComponent {

}
