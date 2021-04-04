import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '../auth/auth.module';
import { Store } from '../store';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppComponent } from './containers/app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppHeaderComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
