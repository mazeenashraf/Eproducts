import { Component, inject, OnInit } from '@angular/core';
import { ProudctService } from '../../core/services/proudct/proudct.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private readonly cartService =inject(CartService)

  private readonly toastrService=inject(ToastrService)
  private readonly ngxSpinnerService=inject(NgxSpinnerService )

  productList:Iproduct[]=[]
  userToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTU1ZDM0ZmE3ODk1ZTgxZjA1MDY0YyIsIm5hbWUiOiJtYXplbiBhc2hyYWYiLCJyb2xlIjoidXNlciIsImlhdCI6MTczOTQ2NDI2NSwiZXhwIjoxNzQ3MjQwMjY1fQ.f2a9bc3sWcnPCgkB9RYm5_a9gfFO79JhSMmdX-dQUrg"
  ngOnInit(): void {

    this.getProductsData()

    }

  private readonly proudctService=inject(ProudctService)
  getProductsData():void{
    this.ngxSpinnerService.show()
    this.proudctService.getallProudcts().subscribe({
      next:(res)=>{
        console.log(res.data);
        localStorage.setItem("userToken" , this.userToken)
        this.proudctService.saveUserData()
        this.ngxSpinnerService.hide()
        this.productList=res.data

      },
      error:(err)=>{
        console.log(err);


      }
    })

  }

  AddToCart( id:string ):void{
    this.cartService.AddProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.toastrService.success(res.message , "Eproduct")

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }

}
