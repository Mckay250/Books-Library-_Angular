import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private http: HttpClient) { }

  addBook(bookData) {
    const newBookData = new FormData();
    newBookData.append('book', bookData.book);
    newBookData.append('cover', bookData.cover);
    newBookData.append('name', bookData.name);
    newBookData.append('description', bookData.description);
    newBookData.append('author', bookData.author);

    return this.http.post<any>(`http://localhost:1196/api/admin/${bookData.category}/addBook`, newBookData);
  }

  getBookByCategory(category) {
    return this.http.get<any>(`http://localhost/1196/api/open/${category}/books`);
  }

  getBookById(id) {
    return this.http.get<any>(`http://localhost/1196/api/open/category/book/${id}`);
  }

  deleteBookById(id) {
    return this.http.get<any>(`http://localhost/1196/api/admin/deleteBook/${id}`);
  }

  updateBook(newBook) {

    return this.http.get<any>('http://localhost/1196/api/admin/updateBook', newBook);
  }
}
