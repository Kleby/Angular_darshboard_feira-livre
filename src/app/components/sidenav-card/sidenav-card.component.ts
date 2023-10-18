import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-card',
  templateUrl: './sidenav-card.component.html',
  styleUrls: ['./sidenav-card.component.css']
})
export class SidenavCardComponent {

  @Input() icon: string = ''
  @Input() titleCard: string = ''
  @Input() isToggleMenu: boolean = false;
  @Input() router: string = '';


}
