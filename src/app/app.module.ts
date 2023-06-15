import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ScrollComponent } from './scroll/scroll.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { ServicesModule } from './services/services.module';
import { ServicesEntreprisesModule } from './services_entreprises/services_entreprises.module';
import { FonctionnementModule} from './fonctionnement/fonctionnement.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    ServicesModule,
    FonctionnementModule,
    ContactModule,
    ScrollComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
