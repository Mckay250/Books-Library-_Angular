import { CategoryService } from './../../services/category-sevice/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  selectedCategory;
  selectedBook;
  books = [];
  
  constructor( public categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  fetchBooks() {
    //fetch books in this.selectedCategory
  }

  deleteBook() {

  }


}
