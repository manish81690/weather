import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheatherComponent } from './wheather/wheather.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WheatherComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: WheatherComponent },
  { path: 'contact', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
