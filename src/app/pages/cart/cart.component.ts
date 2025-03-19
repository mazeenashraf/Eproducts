import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { Icart } from '../../shared/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit {
  private readonly cartService =inject(CartService)
  private readonly toastrService=inject(ToastrService)
  cartDetails:Icart={} as Icart

  ngOnInit(): void {
    this.getCartData()
}
  getCartData():void{
    this.cartService.GetLoggedusercart().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.cartDetails=res.data
      },
      error:(err)=>{
        console.log(err);


      }
    })
  }
  removeItem(id:string):void{
    this.cartService.RemovespecificcartItem(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartDetails = res.data

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }

  updateCount(id:string , count:number ):void{
    this.cartService.Updatecartproductquantity(id, count ).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartDetails=res.data
        this.toastrService.success("added successfully");
        

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
  clearCart():void{
    this.cartService.Clearcart().subscribe({
      next:(res)=>{
        console.log(res);
        if(res.message=='success'){


          this.cartDetails={} as Icart
        }

      },
      error(err){
        console.log(err);


      }
    })
  }

}

