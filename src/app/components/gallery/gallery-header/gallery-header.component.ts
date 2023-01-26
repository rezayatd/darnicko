import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-gallery-header',
  templateUrl: './gallery-header.component.html',
  styleUrls: ['./gallery-header.component.css']
})
export class GalleryHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }



  @Output() newItemClickedEvent = new EventEmitter<string>();

  itemClicked(value: string){
    this.newItemClickedEvent.emit(value);
  }
}
