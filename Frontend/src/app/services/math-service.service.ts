import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathServiceService {

  constructor() { }

  add(a: number, b: number): number{
    return a + b; 
  }

  substract(a: number, b: number): number{
    return a-b; 
  }

  multiply(a: number, b: number): number{
    return a*b; 
  }

  divide(a: number, b: number): number{
    return a/b; 
  }
}
