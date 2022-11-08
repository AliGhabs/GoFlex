import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inscription-entreprise',
    loadChildren: () => import('./inscription-entreprise/inscription-entreprise.module').then( m => m.InscriptionEntreprisePageModule)
  },
  {
    path: 'connexion-entreprise',
    loadChildren: () => import('./connexion-entreprise/connexion-entreprise.module').then( m => m.ConnexionEntreprisePageModule)
  },
  {
    path: 'routerpage',
    loadChildren: () => import('./routerpage/routerpage.module').then( m => m.RouterpagePageModule)
  },
  {
    path: 'page-accueil',
    loadChildren: () => import('./page-accueil/page-accueil.module').then( m => m.PageAccueilPageModule)
  },
  {
    path: 'page-accueil-entreprise',
    loadChildren: () => import('./page-accueil-entreprise/page-accueil-entreprise.module').then( m => m.PageAccueilEntreprisePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
