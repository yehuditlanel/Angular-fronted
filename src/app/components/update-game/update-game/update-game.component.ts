import { Component, OnInit,Inject } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { game } from 'src/app/classes/game';
import { ServerService } from 'src/app/service/server.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {
game:game;
editForm: FormGroup;
change=false;

  constructor(private formBuilder: FormBuilder,private router: Router, private server: ServerService) { }

  ngOnInit() {
    let gameId = window.localStorage.getItem("editGameId");
    if(!gameId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      price: ['', Validators.required],
      number_participants: ['', Validators.required]
    });
    this.server.getGameById(parseInt(gameId))
      .subscribe( data => {
        this.editForm.setValue(data);
      });
      this.onChanges();
  }
  onChanges(): void {
    this.editForm.valueChanges.subscribe(val => {
      this.change=true;
    });
  }
  onSubmit() {
    const self=this;
    this.server.updateGame(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          alert('User updated successfully.');
          self.router.navigate(['list-game'])
        },
        error => {
          alert(error);
        });
  }

}
