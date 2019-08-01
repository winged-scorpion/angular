import {InstrumentalComponent} from '../instrumental/instrumental.component';
import {HomeComponent} from '../home/home.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';
import {ContactComponent} from '../contact/contact.component';
import {PreloadComponent} from '../preload/preload.component';
import {AdminComponent} from '../admin/admin.component';
import {EducationalComponent} from '../educational/educational.component';
import {AuthGuard} from '../auth-guard.service';


export const routes = [
  {path: 'index', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'tools', component: InstrumentalComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'start', component: PreloadComponent},
  {path: 'educational', component: EducationalComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];
