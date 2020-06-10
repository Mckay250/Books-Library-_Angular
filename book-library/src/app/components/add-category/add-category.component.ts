import { CategoryService } from './../../services/category-sevice/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm = {
    name : ''
  }
  catService
  
  constructor( private categoryService: CategoryService ) { }

  ngOnInit(): void {
  }

  addCategory() {
    this.categoryService.addCategory(this.categoryForm)
      .subscribe(
        res => alert('Category has been added'),
        err => alert('There was an error adding the category')
      )
  }

}
