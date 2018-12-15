import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';

//import { appRoutes } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { UserComponent } from './user/user.component';

//SERVICIOS
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdministratorComponent } from './administrator/administrator.component';
import { DirectorComponent } from './director/director.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    UserComponent,
    AdministratorComponent,
    DirectorComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //appRoutes,
    BrowserAnimationsModule,
    LayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
