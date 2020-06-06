import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
