import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//importamos servicio AUTH0
import { AuthService } from '../services/auth.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-my-nav',//<app-my-nav>
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
})
export class MyNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private auth:AuthService) {
    auth.handleAuthentication();
  }

	routes: Object[] = [
    { 
      title: 'Administrators', 
      route: '/administrators', 
      icon: 'supervisor_account'
    },
    { 
      title: 'Directors', 
      route: '/directors', 
      icon: 'face'
    },
    { 
      title: 'Teachers', 
      route: '/teachers', 
      icon: 'group'
    },
    { 
      title: 'Students', 
      route: '/students', 
      icon: 'school'
    },	
    ]

    login(){
      this.auth.login();
    }

    logout(){
      this.auth.logout();
    }
}
