import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FullComponent } from './layouts/full/full.component';
import { WrapperComponent } from './layouts/wrapper/wrapper.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: WrapperComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'login',
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     }
  //   ]
  // },
  {
    path: '',
    component: FullComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
