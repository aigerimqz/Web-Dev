export interface Post {
    userId: number;
    id: number;
    title: string;
}
  
  
export interface BaseResponse {
    posts: Post[];
}
  