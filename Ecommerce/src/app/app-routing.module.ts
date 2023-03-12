import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FullComponent } from './layouts/full/full.component';
import { WrapperComponent } from './layouts/wrapper/wrapper.component';
import { ListComponent } from './pages/products/list/list.component';
import { CreateComponent } from './pages/products/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'login',
      //   pathMatch: 'full',
      // },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'products',
    component: FullComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
