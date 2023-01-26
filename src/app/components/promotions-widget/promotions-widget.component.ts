import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-promotions-widget',
  templateUrl: './promotions-widget.component.html',
  styleUrls: ['./promotions-widget.component.css']
})

export class PromotionsWidgetComponent implements OnInit {


  public  promo1='<div class="h6 fw-bolder">Register today & get 2 Free sessions!</div><div class="h6">Offer Expires: Jan 31/2023</div>';
  public  promo2='<div class="h6 fw-bolder">For each referral, get two free session!<br/>';
  public  promo3="";

  

  constructor( ){
    

    
  }

  @Input() content: string = "";
  ngOnInit(): void {
  }

}
