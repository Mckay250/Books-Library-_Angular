import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  // categories = [];
  // thisProducts: any[];
  // selectedCategory;

  constructor(private router: Router,
              private bookService: BookService) { }

  ngOnInit(): void {
    // this.bookService.getCategories()
    //   .subscribe(
    //     res => {
    //       this.categories = res;
    //       this.getbooksByCategory((this.categories[0]).name)
    //     },
    //     err => {alert("could not fetch categories");
    //             console.log(err)}
    //   );
    
  }

  getbooksByCategory(category){
    // this.bookService.getBooksByCategory(category)
    //     .subscribe(
    //       res => this.thisProducts = res,
    //       err => alert("couldn't fetch data" + err)
    //     )
  }

  onNewCategoryClick(category){
    // this.thisProducts = [];
    // this.getbooksByCategory(category);
    // this.selectedCategory = category;
  }

  navigateToAdmin() {
    this.router.navigate(["/admin"])
  }

}
