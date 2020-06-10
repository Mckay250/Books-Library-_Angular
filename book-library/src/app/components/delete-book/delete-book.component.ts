import { BookService } from './../../services/book-service/book.service';
import { CategoryService } from './../../services/category-sevice/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  selectedCategory;
  selectedBookId;
  categories = [];
  books = [];
  
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
    this.bookService.getBookByCategory(this.selectedCategory)
      .subscribe(
        res => this.books = res,
        err => console.log(err)
      )
  }

  deleteBook() {
    this.bookService.deleteBookById(this.selectedBookId)
      .subscribe(
        res => alert(res),
        err => alert('Couldn"t delete book')
      )
  }

}
