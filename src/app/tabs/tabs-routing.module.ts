import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'music-player',
        loadChildren: () => import('../music-player/music-player.module').then(m => m.MusicPlayerModule)
      },
      {
        path: '',
        redirectTo: '/app/music-player',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/music-player',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
