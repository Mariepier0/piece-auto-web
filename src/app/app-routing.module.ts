import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
// import { AboutModule } from './about/about.module';
import { ServicesModule} from './services/services.module';
import { ServicesEntreprisesModule} from './services_entreprises/services_entreprises.module';
import { FonctionnementModule } from './fonctionnement/fonctionnement.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'contactus', component: ContactusComponent, outlet: 'popup'  },
  { path: 'fonctionnement', loadChildren: () => FonctionnementModule },
  { path: 'services-particuliers', loadChildren: () => ServicesModule },
  { path: 'services-entreprises', loadChildren: () => ServicesEntreprisesModule },
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
