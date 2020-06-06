import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private http: HttpClient,
                private authService: AuthService) { }

  getCategories(): Observable<[]> {
    return this.http.get<[]>("http://localhost:1196/api/open/categories", this.authService.httpOptions)
  }

  addCategory(category) {
    return this.http.post<any>("http://localhost:1196/api/admin/addCategory", this.authService.httpOptions)
  }

  updateCategory(category) {
    return this.http.put<any>("http://localhost:1196/api/admin/updateCategory", category, this.authService.httpOptions)
  }

  deleteCaegory(categoryId) {
    return this.http.delete<any>(`http://localhost:1196/api/admin/delete/${categoryId}`)
  }

  getBooks (): Observable<[]> {
    return this.http.get<[]>("http://localhost:1196/api/open/allBooks")
  }

  getBooksByCategory (category): Observable<[]> {
    return this.http.get<[]>(`http://localhost:1196/api/open/${category}/books`)
  }

  getBooktById(id): Observable<any> {
    return this.http.get<any>(`http://localhost:1196/api/open/category/book/${id}`)
  }

  addBook(book) {
    return this.http.post<any>(`http://localhost:1196/api/admin/${book.category}/addProduct`, book, this.authService.httpOptions);
  }

  updateBook(book) {
    return this.http.put<any>(`http://localhost:1196/api/admin/updateBook`, book, this.authService.httpOptions);
  }

  deleteBook(book) {
    return this.http.delete<any>(`http://localhost:1196/api/admin/deleteBook/${book.id}`, this.authService.httpOptions)
  }
}

