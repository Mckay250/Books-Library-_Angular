import { BookListService } from './../../services/book-list-service/book-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(public booklist: BookListService) { }

  ngOnInit(): void {
  }

}
