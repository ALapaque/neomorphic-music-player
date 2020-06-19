import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicPlayerPage } from './music-player.page';

import { Tab1PageRoutingModule } from './music-player-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab1PageRoutingModule,
        FlexLayoutModule
    ],
  declarations: [MusicPlayerPage]
})
export class MusicPlayerModule {}
