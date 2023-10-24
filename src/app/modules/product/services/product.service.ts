import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  private groupName = 'products';

  public productsList$ = new Subject<void>();
  public selectedProduct$ = new Subject<ProductInterface>();
  
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductInterface[]>{
    return this.httpClient.get<ProductInterface[]>(`${this.baseUrl}/${this.groupName}`);
  }

  saveProduct(product:ProductInterface):Observable<ProductInterface>{
    return this.httpClient.post<ProductInterface>(`${this.baseUrl}/${this.groupName}`, product);
  }

  editProduct(product:ProductInterface, id:number):Observable<ProductInterface>{
    return this.httpClient.put<ProductInterface>(`${this.baseUrl}/${this.groupName}/${id}`, product);
  }

  deleteProduct(id:number):Observable<ProductInterface>{
    return this.httpClient.put<ProductInterface>(`${this.baseUrl}/${this.groupName}/delete/${id}`, null);
  }
}
