import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';


import { MenuHamburgueComponent } from './menu-hamburgue/menu-hamburgue.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SearchComponent } from './search/search.component';
import { SidenavCardComponent } from './sidenav-card/sidenav-card.component';
import { SidenavComponent } from './sidenav/sidenav.component';



const importsComponents = [
  MenuHamburgueComponent,
  ProductCardComponent,
  SearchComponent,
  SidenavCardComponent,
  SidenavComponent,
]

@NgModule({
  declarations: importsComponents,
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: importsComponents
})
export class ComponentsModuleModule { }
