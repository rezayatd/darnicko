import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})

export class FeaturesComponent implements OnInit {
  public promos : string[] = [
    '<div class="h6 fw-bolder">Register today & get 2 Free sessions!</div><div class="h6">Offer Expires: Jan 31/2023</div>',
    '<div class="h6 fw-bolder">For each referral, get two free session!</div><br/>', 
    '<div class="h6 fw-bolder">Register in our yearly plan and SAVE</div><br/>'
  ];
  
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
