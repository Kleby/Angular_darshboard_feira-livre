import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.component.responsive.css']
})
export class HeaderComponent {

  isToggleMenu: boolean= false;

  onToggleMenu(event: boolean): void{
    this.isToggleMenu = event;    
  }

}
