import { CategoryService } from './../../services/category-sevice/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  selectedCategoryId;

  categories = [ ];

  constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(
        res => this.categories = res,
        err => console.log(err)
      )
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.selectedCategoryId)
      .subscribe(
        res => alert('category deleted successfully'),
        err => console.log(err)
      )
  }  

}
