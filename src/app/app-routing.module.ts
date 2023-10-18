import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './templates/not-found/not-found.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/manager/products/products.component';
import { RegisterComponent } from './pages/manager/register/register.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch:'full'
  },
  {
    path: "home", component: HomeComponent, title:"Principal",
  },
  {
    path:"manager", component: ManagerComponent, title:"Home - Administrativo",
    children:[
      {
        path: "products", component: ProductsComponent, title: "Administrativo - Produtos",
      },
      {
        path: "register", component: RegisterComponent, title: "Produtos - Cadastrar "
      }
    ]
  },
  {
    path: "users", component: UsersComponent, title: "Home - Usuário"
  },

  {
    path: "**", component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
