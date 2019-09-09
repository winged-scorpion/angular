import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import * as $ from 'jquery';
import {AppComponent} from './app.component';
import {SliderComponent} from './slider/slider.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {InstrumentalComponent} from './instrumental/instrumental.component';
import {RouterModule} from '@angular/router';
import {ItemComponent} from './portfolio/item/item.component';
import {PopupComponent} from './popup/popup.component';
import {routes} from './nav/routs';
import {PreloadComponent} from './preload/preload.component';
import {CounterComponent} from './instrumental/counter/counter.component';
import {TimerComponent} from './instrumental/timer/timer.component';
import {TimerHostComponent} from './instrumental/timer/timer.host.component';
import {NavWorkComponent} from './nav/nav-work/nav-work.component';
import {NavToolsComponent} from './nav/nav-tools/nav-tools.component';
import {PopupShow} from './statusPopup';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthorizationPopupComponent} from './popup/authorization-popup/authorization-popup.component';
import {SendPopupComponent} from './popup/send-popup/send-popup.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './auth-guard.service';
import {AdminPageComponent} from './admin/admin-page/admin-page.component';
import {SafeUser} from './safe.user';
import {HttpModule} from '@angular/http';
import {PortfolioSettingComponent} from './admin/portfolio-setting/portfolio-setting.component';
import {AddPortfolioItemComponent} from './admin/add-portfolio-item/add-portfolio-item.component';
import {OpenNav} from './nav/openNav';
import {HttpClientModule} from '@angular/common/http';
import {SubscribeTest} from './instrumental/test';
import {HttpService} from './admin/http.service';
import {AuthorizationService} from './authorization.service';
import {Observable1Component} from './instrumental/observable/observable1/observable1.component';
import {Observable2Component} from './instrumental/observable/observable2/observable2.component';
import {Observable3Component} from './instrumental/observable/observable3/observable3.component';
import {ObservableTestComponent} from './instrumental/observable/observable-test/observable-test.component';
import {EducationalComponent} from './educational/educational.component';
import {EditingQuestionsComponent} from './admin/editing-questions/editing-questions.component';
import {QuestionJson} from './educationServices';
import {PortfolioServices} from './portfolioServices';







@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavComponent,
    FooterComponent,
    PortfolioComponent,
    HomeComponent,
    ContactComponent,
    InstrumentalComponent,
    ItemComponent,
    PopupComponent,
    PreloadComponent,
    CounterComponent,
    TimerComponent,
    TimerHostComponent,
    NavWorkComponent,
    NavToolsComponent,
    AuthorizationPopupComponent,
    SendPopupComponent,
    AdminComponent,
    AdminPageComponent,
    PortfolioSettingComponent,
    AddPortfolioItemComponent,
    Observable1Component,
    Observable2Component,
    Observable3Component,
    ObservableTestComponent,
    EducationalComponent,
    EditingQuestionsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule

  ],
  providers: [PopupShow, AuthGuard, SafeUser, OpenNav, SubscribeTest, HttpService, AuthorizationService, SubscribeTest, QuestionJson, PortfolioServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}


