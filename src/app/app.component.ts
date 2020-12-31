import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

interface FavouriteChangedEventArgs{
  newValue: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ResuableComponents';

  post = {
    title: 'Title',
    isFavourite: true
  };

  onFavouriteChange(eventArgs: FavouriteChangedEventArgs): void {
    console.log('Favourite Changed:', eventArgs.newValue);
  }
}
