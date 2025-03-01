import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumItem } from '../albumitem';
import { BaseResponse, Post } from '../../models';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumUrl = "https://jsonplaceholder.typicode.com/albums";

  getAllAlbumItems(){
    return this.client.get<BaseResponse>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbumItem(id: number){
    return this.client.get<Post>('https://jsonplaceholder.typicode.com/albums/${id}');
  }

  constructor(private client: HttpClient) { }
}
