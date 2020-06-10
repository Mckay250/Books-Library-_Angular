import { BookListService } from './services/book-list-service/book-list.service';
import { AuthenticationService } from './services/auth-service/authentication.service';
import { BookService } from './services/book-service/book.service';

import { FormsModule } from '@angular/forms';
import { CategoryService } from './services/category-sevice/category.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    BookListComponent,
    BookDetailComponent,
    AuthComponent,
    AdminComponent,
    SignInComponent,
    SignUpComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoryService, BookService, AuthenticationService, BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
