import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProudctService } from '../../core/services/proudct/proudct.service';
import { Iproduct } from '../../shared/interfaces/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  detailsproudct:Iproduct | null= null
  private readonly activatedRoute=inject(ActivatedRoute)
  private readonly proudctService=inject(ProudctService)
  idProduct:string=''
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( {
      next:(p)=>{
        this.idProduct=(p.get('id')) !;
        // call specific api products
        this.proudctService.getspecificProudcts(this.idProduct).subscribe({
          next:(res)=>{
            this.detailsproudct = res.data


          },
          error:(err)=>{
            console.log(err);

          }
        })

      }
    })
  }

}
