import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  isToggleMenu: boolean = false;

  onToggleMenu(event: boolean){
    this.isToggleMenu = event;
  }

}
