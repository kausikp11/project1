import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./folder/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./folder/contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./folder/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./folder/list/list.module').then( m => m.ListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
