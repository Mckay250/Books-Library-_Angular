import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers : new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('bearer')}`
    })
  }

  
  constructor( private http: HttpClient) { }

  addCategory(category) {
    return this.http.post<any>(`http://localhost:1196/api/admin/addCategory`, category, this.httpOptions);
  }

  getCategories() {
    return this.http.get<any>('http://localhost:1196/api/open/categories');
  }

  deleteCategory(id) {
    return this.http.delete<any>(`http://localhost:1196/api/admin/delete/${id}`, this.httpOptions);
  }
}