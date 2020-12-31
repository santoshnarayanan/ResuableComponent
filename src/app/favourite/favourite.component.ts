import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavouriteComponent {
  @Input('is-favourite') isSelected: boolean;
  @Output() change = new EventEmitter();

  onClick(): void {
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected);
  }

}
