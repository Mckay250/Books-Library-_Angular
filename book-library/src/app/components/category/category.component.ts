import { BookService } from './../../services/book-service/book.service';
import { CategoryService } from './../../services/category-sevice/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = [];
  books = []
  selectedCategory: number;

  constructor( private categoryService: CategoryService,
              private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(
        res => {
          this.categories = res;
          this.bookService.getBookByCategory(this.categories[0].name)
            .subscribe(
              res => this.books = res,
              err => console.log(err)
            )
        },
        err => console.log(err)
      )
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = +params.get('id');
    })
  }

  getCategoryBooks(categoryName) {
    this.books = [];
    this.bookService.getBookByCategory(categoryName)
      .subscribe(
        res => this.books = res,
        err => console.log(err)
      )

  }

}
