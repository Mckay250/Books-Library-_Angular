import { AuthService } from 'src/app/services/auth.service';
import { BookListService } from './../../services/book-list-service/book-list.service';
import { BookService } from './../../services/book-service/book.service';
import { CategoryService } from './../../services/category-sevice/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = [];
  books = []
  selectedCategory: number;
  isAdmin = false;
  isLoggedIn = false;

  constructor( private categoryService: CategoryService,
              private bookService: BookService,
              private route: ActivatedRoute,
              private booklist: BookListService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin();
    this.isLoggedIn = this.auth.loggedIn();
    this.categoryService.getCategories()
      .subscribe(
        res => {
          this.categories = res;
          this.bookService.getBookByCategory(this.categories[0].name)
            .subscribe(
              res => this.booklist.books = res,
              err => console.log(err)
            )
        },
        err => console.log(err)
      )
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = +params.get('id');
    })
  }

  getCategoryBooks(categoryName) {
    this.booklist.categoryName = categoryName
    this.booklist.books = [];
    this.bookService.getBookByCategory(categoryName)
      .subscribe(
        res => this.booklist.books = res,
        err => console.log(err)
      )

  }

  logOut() {
    this.auth.logoutUser()
  }

}
