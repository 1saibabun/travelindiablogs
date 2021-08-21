import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './Components/contact-info/contact-info.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import { StateDetailsComponent } from './Components/state-details/state-details.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'stateDetails',
    component: StateDetailsComponent
  },
  {
    path:'contactDetails',
    component: ContactInfoComponent
  },
  {
    path:'gallery',
    component: GalleryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
