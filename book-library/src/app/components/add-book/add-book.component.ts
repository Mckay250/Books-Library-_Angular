import { CategoryService } from './../../services/category-sevice/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  
  bookForm = {
    name : String,
    author : String,
    cover : File,
    book : File,
    description: String,
    category : String,
  }

  constructor( public categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  addBook() {

  }
}
