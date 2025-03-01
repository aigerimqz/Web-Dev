import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, BaseResponse } from './album';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  dataUrl = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private client: HttpClient) { }

  getAlbums(){
    return this.client.get<BaseResponse>(this.dataUrl);

  }
  getAlbum(id: number) {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);

  }

}
