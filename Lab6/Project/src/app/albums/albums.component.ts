import { Component, inject, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: any[] = [];
  loaded: boolean = false;


  constructor(private albumService: AlbumService){
    

  }
  // ngOnInit(): void {
  //   this.albumService.getAlbums().subscribe(
  //     data => {
  //       this.albums = data;
  //     },
  //     error => {
  //       console.error('Error fetching albums:', error);
  //     }
  //   );
  // }
  ngOnInit(): void {
      this.getAlbums()
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe((baseResponse) => {
      this.albums = baseResponse;
      this.loaded = true;
    });
  }
  deleteAlbum(id: number){
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    })
  }

  // getAlbums() {
  //   this.albumService.getAlbums().subscribe((baseResponse) => {
  //     this.albums = baseResponse.albums;
  //     this.loaded = true;
  //   })
  // }

}
