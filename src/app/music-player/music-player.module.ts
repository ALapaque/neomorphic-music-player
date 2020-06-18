import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicPlayerPage } from './music-player.page';

import { Tab1PageRoutingModule } from './music-player-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [MusicPlayerPage]
})
export class MusicPlayerModule {}
