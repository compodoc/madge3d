import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { Role, THE_ROLE, ROLES, PATHS, MY_PATH } from '../shared/enums/enum';

/*const PATHS = {
  homea: {
    url: {
      level: '/homedeouf'
    }
  },
  homeb: 'sfd'
}*/

const HOME_ROUTES: Routes = [
    {
        path: PATHS.homea.url.level,
        component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
