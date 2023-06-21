import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
// import { AboutModule } from './about/about.module';
import { ConteneursModule} from './conteneurs/conteneurs.module';
import { FerrailleModule} from './ferraille/ferraille.module';
import { FonctionnementModule } from './fonctionnement/fonctionnement.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'contactus', component: ContactusComponent, outlet: 'popup'  },
  { path: 'fonctionnement', loadChildren: () => FonctionnementModule },
  { path: 'nos-conteneurs', loadChildren: () => ConteneursModule },
  { path: 'achat-ferraille', loadChildren: () => FerrailleModule },
  { path: 'contact', loadChildren: () => ContactModule },
  { path: 'about', loadChildren: () => AboutModule },
  // { path: 'clients', loadChildren: () => ClientsModule },
  // { path: 'pricing', loadChildren: () => PricingModule },
  // { path: 'subscribe', component: SubscribeComponent, outlet: 'popup' },
  // { path: 'dashboard', loadChildren: () => UserDashboardModule, canActivate: [RoutegaurdService]   },
  // { path: 'blog', loadChildren: () => BlogModule, canActivate: [RoutegaurdService] },
  // { path: '404', loadChildren: () => NotfoundModule },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
