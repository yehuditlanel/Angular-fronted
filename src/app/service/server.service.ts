import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { game } from '../classes/game';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  path="http://127.0.0.1:8000/api/game";
  constructor(private http:HttpClient) {
    }
  byGet():Observable<any[]>{
    return this.http.get<any[]>(this.path);
  }
  deleteGame( id:number){
    return this.http.delete(this.path+'/'+id);
  }
  createGame(game:game){
    return this.http.post(this.path,game);
  }
  updateGame(game: game) {
    return this.http.put(this.path +'/update/'+ game.id, game);
  }
  getGameById(id:number){
    return this.http.get(this.path +'/'+ id);
  }
  getSearchGame(name:string):Observable<any[]>{
    return this.http.get<any[]>(this.path+'/search/'+name);
  }
}
