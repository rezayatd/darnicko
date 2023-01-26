import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  itemClicked = 'one' 
  
  constructor() { }

  ngOnInit(): void {
  }

  setItemClicked(newItemClicked: string){
    this.itemClicked = newItemClicked;
  }
}
