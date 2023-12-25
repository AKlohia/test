import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  FetchData():Promise<Product[]>{
    return this.run();
  }
   async run(): Promise<Product[]> {
    const apiUrl = 'https://fakestoreapi.com/products';

    try {
      const response = await fetch(apiUrl)
const res = await response.json();
     
      return res as Product[];
    } catch (error) {
      console.error('Error fetching data:', error);
      return Promise.reject(error);
    }
  }
  textdata():string{
  return "hello abhishek "
 }
}