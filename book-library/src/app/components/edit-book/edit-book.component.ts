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

  bookForm = {
    name : String,
    author : String,
    cover : File,
    book : File,
    description: String,
    category : String
  }
  selectedBooks = [];

  constructor( public categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  fetchBooks() {
    //fetch books usint this.bookForm.category TODO
  }

  editBook() {
    //put request for the edited book
  }



}
