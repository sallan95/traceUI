import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Household } from './household/household';


@Injectable({
  providedIn: 'root'
})
export class EntityApiService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  retrieveEntityObjects(objectName){
     return this.http.get('http://localhost:8080/'+objectName).pipe(map((data: any) => {
      return data._embedded;
    }));

  }
  
  constructor(
    private http: HttpClient

  ) { }
}
