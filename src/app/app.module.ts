import { NumberService } from './services/number.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentUmComponent } from './pages/component-um/component-um.component';
import { ComponentDoisComponent } from './pages/component-dois/component-dois.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducer } from './state-management/reducers/reducer';

@NgModule({
  declarations: [
    AppComponent,
    ComponentUmComponent,
    ComponentDoisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { numeroReducer: reducer }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    NumberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
