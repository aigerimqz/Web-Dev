import { Component, inject, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-albums',
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: Album[] = [];
  loaded: boolean = false;


  constructor(private albumService: AlbumService){
    

  }
  ngOnInit(): void {
      this.getAlbums()
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe((baseResponse) => {
      this.albums = baseResponse.albums;
      this.loaded = true;
    });
  }

  // getAlbums() {
  //   this.albumService.getAlbums().subscribe((baseResponse) => {
  //     this.albums = baseResponse.albums;
  //     this.loaded = true;
  //   })
  // }

}
