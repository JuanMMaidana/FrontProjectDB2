import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridSeachPageComponent } from './pages/grid-seach-page/grid-seach-page.component';
import { CreatePublicationComponent } from './components/create-publication/create-publication.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { WelocmeComponent } from './components/welocme/welocme.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsComponent } from './pages/friends/friends.component';

const routes: Routes = [
  {path: 'necesidades', component: GridSeachPageComponent},
  {path: 'voluntarios', component: GridSeachPageComponent},
  {path: 'subirPublicacion', component: CreatePublicationComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bienvenido', component: WelocmeComponent},
  {path: 'perfil', component: ProfileComponent},
  {path: 'red', component: FriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
