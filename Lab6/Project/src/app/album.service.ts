import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, BaseResponse } from './album';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  

}
