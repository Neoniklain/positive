import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutesModule} from './app.routes.module';
import {ErrorHandlerService} from './services/error-handler.service';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {CurrencyService} from './services/currency.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutesModule),
    TableModule,
    InputTextModule,
    ButtonModule,
    AngularFontAwesomeModule,
    DialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule
  ],
  providers: [
    CurrencyService,
    ErrorHandlerService,
    ConfirmationService,
    MessageService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
