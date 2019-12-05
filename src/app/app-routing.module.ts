import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/characters', pathMatch: 'full'
  },
  {
    path: 'characters', loadChildren: () => import('./characters/characters.module').then(mod => mod.CharactersModule)
  },
  {
    path: 'comics',  loadChildren: () => import('./comics/comics.module').then(mod => mod.ComicsModule)
  },
  {
    path: 'rating',  loadChildren: () => import('./star/star.module').then(mod => mod.StarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
