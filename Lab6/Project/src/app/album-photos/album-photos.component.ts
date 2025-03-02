import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';
@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
      
  }
}
