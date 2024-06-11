import { Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { AboutUsComponent } from './domains/about-us/about-us.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutUsComponent,

    }
];
