import { BookService } from './../../services/book-service/book.service';
import { CategoryService } from './../../services/category-sevice/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  selectedBook;
  books = []
  categories = [];
  bookForm = {
    name : String,
    author : String,
    cover : File,
    book : File,
    description: String,
    category : String
  }
  selectedBooks = [];

  constructor( public categoryService: CategoryService,
                private bookService: BookService) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(
        res => this.categories = res,
        err => console.log(err)
      )
  }

  fetchBooks() {
    //fetch books in this.selectedCategory
    this.bookService.getBookByCategory(this.bookForm.category)
      .subscribe(
        res => this.books = res,
        err => console.log(err)
      )
  }
  

  editBook() {
    //put request for the edited book
    this.bookService.updateBook(this.selectedBook)
      .subscribe(
        res => alert('Book has been updated successfully'),
        err => alert('There was an error updating the book')
      )
  }
}
