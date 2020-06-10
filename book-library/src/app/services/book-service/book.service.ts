import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {


 httpOptions = {
   headers : new HttpHeaders({
     'Authorization': `Bearer ${localStorage.getItem('bearer')}`
   })
 }

  constructor( private http: HttpClient) { }

  addBook(bookData) {
    const newBookData = new FormData();
    newBookData.append('book', bookData.book);
    newBookData.append('cover', bookData.cover);
    newBookData.append('name', bookData.name);
    newBookData.append('description', bookData.description);
    newBookData.append('author', bookData.author);

    return this.http.post<any>(`http://localhost:1196/api/admin/${bookData.category}/addBook`, newBookData, this.httpOptions);
  }

  getBookByCategory(category) {
    return this.http.get<any>(`http://localhost/1196/api/open/${category}/books`);
  }

  getBookById(id) {
    return this.http.get<any>(`http://localhost/1196/api/open/category/book/${id}`);
  }

  deleteBookById(id) {
    return this.http.delete<any>(`http://localhost/1196/api/admin/deleteBook/${id}`, this.httpOptions);
  }

  updateBook(newBook) {

    return this.http.put<any>('http://localhost/1196/api/admin/updateBook', newBook, this.httpOptions);
  }
}
