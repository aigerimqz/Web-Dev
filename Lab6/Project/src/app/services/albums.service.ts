import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumItem } from '../albumitem';
import {BaseResponse, Post} from 'src/models';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumUrl = "https://jsonplaceholder.typicode.com/albums";

  getAllAlbumItems(){
    return this.client.get<BaseResponse
  }

  constructor(private client: HttpClient) { }
}
