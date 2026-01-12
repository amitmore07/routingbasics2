import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { PostsDashboardComponent } from './components/posts-dashboard/posts-dashboard.component';
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [


  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:"home",
    pathMatch:'full'
  },

  {
    path: 'products',
    component : ProductsDashboardComponent
  },
  {
    path: 'posts',
    component : PostsDashboardComponent
  },
  {
    path: 'users',
    component : UsersDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
