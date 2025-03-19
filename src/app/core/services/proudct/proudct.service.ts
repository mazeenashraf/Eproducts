import { jwtDecode } from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProudctService {
  userData:any=null

  constructor( private httpClient:HttpClient ) { }
  getallProudcts():Observable<any>{
    return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  getspecificProudcts(id:string):Observable<any>{
    return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  saveUserData():void{
    if( localStorage.getItem('userToken') !== null){

      this.userData = jwtDecode( localStorage.getItem('userToken') ! )
      console.log("userdata" , this.userData);

    }
  }
}
