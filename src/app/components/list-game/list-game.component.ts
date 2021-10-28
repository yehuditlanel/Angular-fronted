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
// games:Array<game>=[
//   {id:1, name: "book1", price: 5,number_participants:16},
//   { id:2,name: "book2", price: 8 ,number_participants:16},
//   { id:3,name: "book3", price: 9 ,number_participants:89},
//   { id:4,name: "book4", price: 10, number_participants:15}
// ];
games:game[];
  ngOnInit() {
    this.server.byGet()
      .subscribe( data => {
        this.games = data;
      });
  }
  deleteUser(game: game): void {
    this.server.deleteGame(game.id)
      .subscribe( data => {
        this.games = this.games.filter(u => u !== game);
      })
  };

  editUser(game: game): void {
    window.localStorage.removeItem("editGameId");
    window.localStorage.setItem("editGameId", game.id.toString());
    this.router.navigate(['edit-game']);
  };

  addUser(): void {
    this.router.navigate(['add-game']);
  };

}
