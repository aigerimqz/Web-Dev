import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { Location } from '@angular/common';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-album-detail',
  imports: [CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  // album: Album | undefined;
  album: any;
  loaded: boolean = true;
  newTitle: string = '';

  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService){

  }

  ngOnInit(): void {
      this.router.paramMap.subscribe((params) => {
        let id = Number(params.get('id'));
        this.getAlbum(id);
      })
  }

  getAlbum(id: number){
    this.albumService.getAlbum(id).subscribe((album) => {
      this.album = album;
      this.loaded = true;
    })
  }

  saveTitle() {
    this.albumService.updateAlbum(this.album.id, this.newTitle).subscribe(updatedAlbum => {
      this.album.title = updatedAlbum.title;
    })
  }
}
