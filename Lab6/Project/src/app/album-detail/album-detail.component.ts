import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../album';
import { Location } from '@angular/common';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  // album: Album | undefined;
  album: any;
  loaded: boolean = true;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService,
    private router: Router){

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
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
  goBack(){
    this.location.back();
  }
}
