import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-hamburgue',
  templateUrl: './menu-hamburgue.component.html',
  styleUrls: ['./menu-hamburgue.component.css']
})
export class MenuHamburgueComponent {
  isToggleMenu: boolean = false;

  @Output() handleOnToggleMenu = new EventEmitter<boolean>();



  onToggleMenu(): void{
    this.isToggleMenu = !this.isToggleMenu;
    this.handleOnToggleMenu.emit(this.isToggleMenu);
  }
}
