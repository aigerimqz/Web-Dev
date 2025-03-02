import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, BaseResponse } from './album';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private dataUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<any[]>{
    return this.client.get<any[]>(this.dataUrl);

  }
  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);

  }

  getPhotos(albumId: number): Observable<any[]>{
    return this.client.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }

  deleteAlbum(id: number): Observable<any>{
    return this.client.delete(`${this.dataUrl}/${id}`);
  }

  updateAlbum(id: number, title: string): Observable<any> {
    return this.client.put(`${this.dataUrl}/${id}`, {title});
  }

  
}
