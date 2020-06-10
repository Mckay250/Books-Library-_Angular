import { BookService } from './../../services/book-service/book.service';
import { CategoryService } from './../../services/category-sevice/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  categories = [];
  bookForm = {
    name : String,
    author : String,
    cover : File,
    book : File,
    description: String,
    category : String,
  }

  constructor( public categoryService: CategoryService,
                private BookService: BookService) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(
        res => this.categories = res,
        err => console.log(err)
      )
  }

  addBook() {
    this.BookService.addBook(this.bookForm)
      .subscribe(
        res => alert('Book was added successfully'),
        err => alert('there was an error adding book')
      )
  }
}
