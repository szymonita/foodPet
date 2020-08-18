import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PetComponent } from './pet/pet.component';
import { TermsComponent } from './terms/terms.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'createAccount',
    component: CreateAccountComponent
  },
  {
    path: 'pet',
    component: PetComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
