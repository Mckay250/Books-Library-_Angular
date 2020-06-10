import { HttpClient } from '@angular/common/http';
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
  
  constructor( private http: HttpClient) { }

  addCategory(category) {
    return this.http.post<any>(`http://localhost:1196/api/admin/addCategory`, category);
  }

  getCategories() {
    return this.http.get<any>('http://localhost:1196/api/open/categories');
  }

  deleteCategory(id) {
    return this.http.delete<any>(`http://localhost:1196/api/admin/delete/${id}`);
  }
}