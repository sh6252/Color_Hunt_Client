import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCollectionComponent } from './pages/my-collection/my-collection.component';
import { CreatePalleteComponent } from './pages/create-pallete/create-pallete.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent, children: [

            { path: '', component: SignInComponent },
            { path: 'sign-in', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent }
        ]
    },
    {
        path: '', component: MainComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'my-collection/:id', component: MyCollectionComponent },
            { path: 'create', component: CreatePalleteComponent }

        ]
    },
    { path: '**', component: NotFoundComponent }
];
