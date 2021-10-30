import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { game } from 'src/app/classes/game';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css']
})
export class ListGameComponent implements OnInit {

  constructor(private server:ServerService,private router:Router) { }
games:game[];
names:game[];
game:any;
key:string;
  ngOnInit() {
    this.server.byGet()
      .subscribe( data => {
        this.games = data;
      });
  }
  deleteGame(game: game): void {
    this.server.deleteGame(game.id)
      .subscribe( data => {
        this.games = this.games.filter(u => u !== game);
      })
  };

  editGame(game: game): void {
    window.localStorage.removeItem("editGameId");
    window.localStorage.setItem("editGameId", game.id.toString());
    this.router.navigate(['edit-game']);
  };

  addGame(): void {
    this.router.navigate(['add-game']);
  };
  getgameSearch(name:any){
    const self=this;
    this.key=name.target.value;
    if(this.key==''){
      this.key=null;
    }
    this.server.getSearchGame(this.key)
      .subscribe( data => {
        this.games=data;
        if(this.key!=null){
          this.names=data;
        }
        else{
          this.names=[];
        }
      });
  }
  getValueSearch(){
    return this.key;
  }
}
