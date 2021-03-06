
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'admin', 
    component: AdminComponent,
    children: [
      { path: 'addcategory', component: AddCategoryComponent},
      { path: 'deletecategory', component: DeleteCategoryComponent},
      { path: 'addbook', component: AddBookComponent},
      { path: 'editbook', component: EditBookComponent},
      { path: 'deletebook', component: DeleteBookComponent},
    ]},
  { path: 'auth', 
    component: AuthComponent,
    children: [
      { path: 'signin', component: SignInComponent},
      { path: 'signup', component: SignUpComponent},
      { path: '', redirectTo: 'signin', pathMatch: 'full'}
    ]},
  { path: 'categories/:id', 
    component: CategoryComponent,
    children: [
      { path: '', component: BookListComponent},
      { path: ':title', component: BookDetailComponent}
    ]
  },
  { path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
