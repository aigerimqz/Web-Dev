import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos: any[] = [];
  loaded: boolean = false;
  albumId: number = 1;


  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.albumService.getPhotos(id).subscribe(data => {
        this.photos = data.map(photo => ({
          thumbnailUrl: photo.thumbnailUrl.replace('via.placeholder.com', 'dummyimage.com')
        }));
        this.loaded = true;
      });
  }
 
  goBack(){
    this.location.back();
  }
}
