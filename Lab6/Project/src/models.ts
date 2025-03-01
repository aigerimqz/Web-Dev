export interface AlbumItem {
    userId: number;
    id: number;
    title: string;
}
  
  
export interface BaseResponse {
    albums: AlbumItem[];
}
  