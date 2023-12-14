import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
const routes: Routes = [{ path: 'visiteur', loadChildren: () => import('./visiteur/visiteur.module').then(m => m.VisiteurModule) },
 { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
{path : '',redirectTo:'visiteur',pathMatch:'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
