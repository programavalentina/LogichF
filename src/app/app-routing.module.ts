import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

//Importamos los componentes
import { MyNavComponent } from './my-nav/my-nav.component';
import { AdministratorComponent} from './administrator/administrator.component';
import { DirectorComponent} from './director/director.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = 
	[
  		{
  			path: '', 
  			component: MyNavComponent,
      		children:
      		[
  			{
  				path: 'administrator',
  				component:AdministratorComponent, 
    			canActivate:[ AuthGuardService ] 
    		},
  			{
  				path: 'director', 
				  component: DirectorComponent
			},
  			{
  				path: 'teacher', 
  				component: TeacherComponent
  			},
  			],
  		},
	];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{};
export const appRoutes: any = RouterModule.forRoot(routes);

