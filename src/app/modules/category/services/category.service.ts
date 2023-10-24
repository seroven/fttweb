import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryInterface } from '../interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://127.0.0.1:8000/api';
  private groupName = 'categories';

  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<CategoryInterface[]>{
    return this.httpClient.get<CategoryInterface[]>(`${this.baseUrl}/${this.groupName}`);
  }
}
