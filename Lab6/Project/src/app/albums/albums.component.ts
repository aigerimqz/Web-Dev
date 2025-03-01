import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumItem } from '../../models';
import { AlbumsService } from '../services/albums.service';
@Component({
  selector: 'app-albums',
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: AlbumItem[] = []
  loaded: boolean = false;
  
  constructor(private albumsService: AlbumsService){
    
  }

  ngOnInit(): void {
    this.getAlbumItems()
  }

  getAlbumItems(){
    this.albumsService.getAlbumItems().subscribe((baseResponse) => {
      this.albums = baseResponse.albums;
      this.loaded = true;
    });
  }
  
  
}
