import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicationComponent } from './components/publication/publication.component';
import { PubishButtonComponent } from './components/pubish-button/pubish-button.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './services/in-memory-data.service';
import { PublicationGridComponent } from './components/publication-grid/publication-grid.component';
import { GridSeachPageComponent } from './pages/grid-seach-page/grid-seach-page.component';
import { CreatePublicationComponent } from './components/create-publication/create-publication.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublicationComponent,
    PubishButtonComponent,
    PublicationGridComponent,
    GridSeachPageComponent,
    CreatePublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule, 
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
