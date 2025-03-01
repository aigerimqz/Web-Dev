import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from '../albums/albums.component';
import { AlbumItem } from '../albumitem';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  albumItemList: AlbumItem[] = [];
  albumsService: AlbumsService = inject(AlbumsService);

  constructor() {
    this.albumItemList = this.albumsService.getAllAlbumItems();
  }

}

