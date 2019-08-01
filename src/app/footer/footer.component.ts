import {Component} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SubscribeTest} from '../instrumental/test';

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.html',
  styleUrls: ['./app.footer.scss']
})

export class FooterComponent {
  subscription: Subscription;
  private login: string;

  constructor(private testSubscription: SubscribeTest) {
    this.subscription = this.testSubscription.getMessage().subscribe(message => {
      this.login = this.testSubscription.adminLogin;

    });
  }

}
