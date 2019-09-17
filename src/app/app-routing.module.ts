import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { DetailComponent } from './products/detail/detail.component';
import { WelcomeComponent } from './misc/welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { TemplateComponent } from './validation/template/template.component';
import { ReactiveComponent } from './validation/reactive/reactive.component';


const routes: Routes = [
  {path:"products", component: ProductsComponent , canActivate:[AuthGuard]},
  {path:"products/:id", component:DetailComponent, canActivate:[AuthGuard]},
  {path:"template-forms", component:TemplateComponent, canActivate:[AuthGuard]},
  {path:"reactive-forms", component:ReactiveComponent, canActivate:[AuthGuard]},
  {path: "welcome", component:WelcomeComponent},
  {path: "login", component:LoginComponent},
  {path:"", redirectTo:"products", pathMatch:"full"},
  {path:"**", redirectTo:"products"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
