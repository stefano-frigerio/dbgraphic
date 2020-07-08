import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dbgraphic';
  private cookieValue: string;
  constructor (private CookieService: CookieService){}
  public ngOnInit(): void{
    this.cookieValue = this.CookieService.get('cookie_consent');
    if(this.cookieValue == 'yes'){
      document.getElementById('cookieConsent').style.display='none';
    }
  }
  accettacookie(){
    console.log("accetta");
    this.CookieService.set('cookie_consent', 'yes', 30);
    document.getElementById('cookieConsent').style.display='none';
  }
  chiudiCookie(){
    console.log("chiudi");
    this.CookieService.set('cookie_consent', 'no');
    document.getElementById('cookieConsent').style.display='none';
  }
}
