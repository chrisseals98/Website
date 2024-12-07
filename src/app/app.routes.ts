import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { JavaGameComponent } from './java-game/java-game.component';
import { NetProjectsComponent } from './net-projects/net-projects.component';
import { LinuxProjectsComponent } from './linux-projects/linux-projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "me",
        component: AboutMeComponent
    },
    {
        path: "web",
        component: WebProjectsComponent
    },
    {
        path: "java",
        component: JavaGameComponent
    },
    {
        path: "net",
        component: NetProjectsComponent
    },
    {
        path: "linux",
        component: LinuxProjectsComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
