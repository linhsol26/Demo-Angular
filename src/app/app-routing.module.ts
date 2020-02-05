import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) },
{ path: 'about', loadChildren: () => import('./page/about/about.module').then(m => m.AboutModule) },

{ path: 'product/:id',
loadChildren: () => import('./page/products-details/products-details.module').then(m => m.ProductsDetailsModule) },
{ path: '**', loadChildren: () => import('./page/page-error/page-error.module').then(m => m.PageErrorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
