import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CardsComponent } from './cards/cards.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { OffersComponent } from './offers/offers.component';
import { AuthGuardService } from './helper/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    //component: WelcomePageComponent
    redirectTo: 'accounts',
    pathMatch: 'full'
  },
  { 
    path: 'accounts', 
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule),
  },
  { 
    path: 'cards', 
    loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule),
    canActivate: [AuthGuardService]
  },
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) },
  { path: 'offers', loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule) },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
    //redirectTo: ''
  }
];

// const routes: Routes = [
//   {
//     path: 'accounts',
//     component: AccountsComponent
//   },
//   {
//     path: 'cards',
//     component: CardsComponent
//   }
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
