import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse, AlbumItem } from '../../models';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumUrl = "https://jsonplaceholder.typicode.com/albums";

  getAlbumItems(){
    return this.client.get<BaseResponse>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbumItem(id: number){
    return this.client.get<AlbumItem>('https://jsonplaceholder.typicode.com/albums/${id}');
  }

  constructor(private client: HttpClient) { }
}
