import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreatePetAccountComponent } from './components/create-pet-account/create-pet-account.component';
import { PetComponent } from './components/pet/pet.component';
import { TermsComponent } from './components/terms/terms.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DataTermsComponent } from './components/data-terms/data-terms.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BeginComponent } from './components/begin/begin.component';
import { ScanComponent } from './components/scan/scan.component';
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'begin',
    component: BeginComponent
  },
  {
    path: 'createAccount',
    component: CreateAccountComponent
  },
  {
    path: 'createPetAccount',
    component: CreatePetAccountComponent
  },
  {
    path: 'pet',
    component: PetComponent
  },
  {
    path: 'scan',
    component: ScanComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'dataTerms',
    component: DataTermsComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
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
export class AppRoutingModule {
}
