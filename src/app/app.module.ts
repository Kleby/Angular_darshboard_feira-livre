import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModuleModule } from './components/components.module';
import { TemplateModule } from './templates/template.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/manager/products/products.component';
import { RegisterComponent } from './pages/manager/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManagerComponent,
    UsersComponent,
    ProductsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModuleModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
