import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router,private server:ServerService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      price: ['', Validators.required],
      number_participants: ['', Validators.required]
    });
  }
  onSubmit() {
    const self=this;
    console.log(this.addForm.value);
    this.server.createGame(this.addForm.value)
      .subscribe( data => {
        self.router.navigate(['list-game']);
      });
  }

}
