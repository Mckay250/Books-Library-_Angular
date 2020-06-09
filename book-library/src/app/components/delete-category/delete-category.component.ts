import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  selectedCategory;

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

  ngOnInit(): void {
  }

  deleteCategory() {
    
  }  

}
