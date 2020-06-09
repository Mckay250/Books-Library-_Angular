import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories = [
    {
      id: 1,
      name: 'comedy',
      books: []
    },
    {
      id: 2,
      name: 'drama',
      books: []
    },
    {
      id: 3,
      name: 'action',
      books: []
    }
  ]
  
  constructor() { }
}
