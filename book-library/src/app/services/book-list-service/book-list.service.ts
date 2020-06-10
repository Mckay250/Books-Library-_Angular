import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  books = [ ];
  categoryName: any;

  constructor() { }
}
