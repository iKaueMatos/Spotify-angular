import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artist-top-image',
  templateUrl: './artist-top-image.component.html',
  styleUrl: './artist-top-image.component.scss'
})
export class ArtistTopImageComponent implements OnInit {

  @Input()
  imagemSrc = '';

  @Output()
  click = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  onClick(){
    this.click.emit();
  }
}
