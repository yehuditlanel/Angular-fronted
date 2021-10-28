import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddGameComponent } from './components/add-game/add-game.component';
import { UpdateGameComponent } from './components/update-game/update-game/update-game.component';
import { ListGameComponent } from './components/list-game/list-game.component';
import { ServerService } from 'src/app/service/server.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddGameComponent,
    UpdateGameComponent,
    ListGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
