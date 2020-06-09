import { BookService } from './services/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { CategoryComponent } from './components/category/category.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
