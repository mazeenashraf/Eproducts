import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private httpClient:HttpClient) { }
  myToken=localStorage.getItem("userToken")
  AddProductToCart(id:string):Observable<any>{
   return this.httpClient.post(`https://ecommerce.routemisr.com/api/v1/cart` ,
    {
      "productId": id
  },
  {
    headers:{
      token: this.myToken !
    }
  }
   )
  }
  GetLoggedusercart():Observable<any>{
    return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
      headers:{
        token:this.myToken!
      }
    } )
  }

  RemovespecificcartItem(id:string):Observable<any>{
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {
      headers:{
        token:this.myToken!
      }
    })
  }
  Updatecartproductquantity(id:string , newCount:number):Observable<any>{
    return this.httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
      {
        "count": newCount
    },
    {
      headers:{
        token:this.myToken!
      }
    }
     )
  }
  Clearcart():Observable<any>{
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart` , {
      headers:{
        token:this.myToken!
      }
    })
  }
}
