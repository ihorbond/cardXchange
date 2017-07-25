import { Routes }                from '@angular/router';
import { ContactsComponent }     from './contacts/contacts.component';
import { UserProfileComponent }  from './user-profile/user-profile.component';
import { AboutComponent }        from './about/about.component';
import { LoginComponent }        from './login/login.component';
import { SignupComponent }       from './signup/signup.component';
import { AppComponent }          from './app.component';
import { AddCardComponent }      from './add-card/add-card.component';
import { HelpComponent }         from './help/help.component';
import { HomeComponent }        from './home/home.component';

export const routes: Routes = [
    { path: '',         component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'profile',  component: UserProfileComponent },
    { path: 'about',    component: AboutComponent },
    { path: 'help',     component: HelpComponent },
    { path: 'login',    component: LoginComponent },
    { path: 'signup',   component: SignupComponent },
    { path: 'profile/add-card', component: AddCardComponent },
    // { path: 'login',    redirectTo: '', pathMatch: 'full' }
];
