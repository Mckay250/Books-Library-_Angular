import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  categories: any;
  

  constructor( private router: Router,
                private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getCategories()
                      .subscribe(
                        res => {
                          this.categories = res
                          },
                        err=> console.log(err));
  }

  // setCategory(category) { this.productData.category = category;
  //                         this.addView = ""}

  // toggleSaleOn(event) { this.productData.onSale = true; console.log("true")}

  // toggleSaleOff(event) { this.productData.onSale = false; console.log("false")}

  // toggleUpdateSaleOn(event) { this.selectedProduct.onSale = true;}

  // toggleUpdateSaleOff(event) { this.selectedProduct.onSale = false;}

  submitProduct() { 
    // console.log(this.productData);
    // this._productService.addProduct(this.productData)
    // .subscribe(
    //   res => {
    //     console.log(res);
    //     alert(res)
    //   },
    //   err => {console.log(err);
    //     this.router.navigate(['/admin']);}
    // )
  }

  submitUpdatedProduct() { 
    // console.log(this.selectedProduct);
    // this._productService.updateProduct(this.selectedProduct)
    // .subscribe(
    //   res => {
    //     console.log(res);
    //     alert("Product Updated Successfully");
    //   },
    //   err => {console.log(err)}
    // )
  }

  fetchProducts(event) {
    // this._productService.getProductsByCategory(this.selectedCategory.name)
    // .subscribe(
    //   res => {
    //     console.log("fetched products")
    //     this.catProducts = res;
    //   },
    //   err => { console.log(err)}
    // )
  }


  selectPostCategory(event) {
    // console.log(this.selectedPostCategory.name);
    //   this.productData.category = this.selectedPostCategory.name;
  }

  submitNewCategory(){
    // this._productService.addCategory(this.newCategory)
    // .subscribe(
    //   res => {console.log(res);
    //             alert(`Added ${this.newCategory} category to the database`);
    //             this.router.navigate(['/admin']);
    //           },
    //   err => console.log(err) 
    // ) 
  }

  deleteProduct(product) {
    // this._productService.deleteProduct(product)
    // .subscribe(
    //   res => {console.log(res);
    //         alert("Product removed, delete more products or refresh the category to verify changes.")},
    //   err => console.log(err)
    // )
  }

}
